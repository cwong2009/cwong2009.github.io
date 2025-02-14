import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as math from "mathjs";

import {
  cropAndResizeTo28x28Matrix,
  createConnectionLines,
  reluMatrix,
  normalizeArray,
  updateConnectionLinesColor,
  generateInputLayerArrayFrom2DPixels,
  updateCubesColorFrom2DPixels,
  forwardPass,
  updateLayerCubeColor,
  maxPool2d,
} from "./utils";

const croppedCanvas = document.createElement("canvas");
const resizedCanvas = document.createElement("canvas");
resizedCanvas.width = 28;
resizedCanvas.height = 28;

/* ===================================================
   Section 1 – Drawing Canvas and Buttons
   =================================================== */
const drawCanvas = document.createElement("canvas");
drawCanvas.width = 256;
drawCanvas.height = 256;
drawCanvas.style.border = "1px solid black";
drawCanvas.style.position = "absolute";
drawCanvas.style.left = "10px";
drawCanvas.style.top = "10px";
document.body.appendChild(drawCanvas);

const drawCtx = drawCanvas.getContext("2d", { willReadFrequently: true });
drawCtx.fillStyle = "white";
drawCtx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);

const clearButton = document.createElement("button");
clearButton.innerText = "Clear Canvas";
clearButton.style.position = "absolute";
clearButton.style.left = "10px";
clearButton.style.top = "276px"; // 10 + 256 + 10
document.body.appendChild(clearButton);

// Attach an event listener using the correct variable name:
clearButton.addEventListener("click", () => {
  drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  drawCtx.fillStyle = "white";
  drawCtx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
  updateAllLayers();
});

const guessResultNode = document.createElement("div");
guessResultNode.innerText = "Guess:";
guessResultNode.style.position = "absolute";
guessResultNode.style.color = "white";
guessResultNode.style.background = "black";
guessResultNode.style.left = "280px";
guessResultNode.style.top = "15px";
document.body.appendChild(guessResultNode);

let conv1Weight = [];
let conv1Bias = [];
let conv2Weight = [];
let conv2Bias = [];
let fc1Weight = [];
let fc1Bias = [];
let fc2Weight = [];
let fc2Bias = [];

/* ===================================================
   Section 3 – Mouse Drawing Events
   =================================================== */
let drawing = false;
drawCanvas.addEventListener("mousedown", (e) => {
  drawing = true;
  const rect = drawCanvas.getBoundingClientRect();
  drawCtx.beginPath();
  drawCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});
drawCanvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  const rect = drawCanvas.getBoundingClientRect();
  drawCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  drawCtx.strokeStyle = "black";
  drawCtx.lineWidth = 16;
  drawCtx.lineCap = "round";
  drawCtx.lineJoin = "round";
  drawCtx.stroke();
  updateAllLayers();
});
drawCanvas.addEventListener("mouseup", () => {
  drawing = false;
  updateAllLayers();
});
drawCanvas.addEventListener("mouseleave", () => {
  drawing = false;
  updateAllLayers();
});

/* ===================================================
   Section 4 – Three.js Scene, Camera, Renderer, Controls
   =================================================== */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x303030);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(100, 30, 50);
camera.lookAt(new THREE.Vector3(0, 0, -20));
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enableZoom = true;
controls.enablePan = true;

function createLayer(
  numRow,
  numCol,
  xPos,
  yPos,
  zPos,
  baseCubeSize = 1,
  spacing = 1.2
) {
  const cubeGroup = new THREE.Group();
  const gridOffsetX = -((numCol - 1) * spacing) / 2;
  const gridOffsetY = -((numRow - 1) * spacing) / 2;
  for (let i = 0; i < numRow; i++) {
    for (let j = 0; j < numCol; j++) {
      const geometry = new THREE.BoxGeometry(
        baseCubeSize,
        baseCubeSize,
        baseCubeSize
      );
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        // transparent: true,
        // opacity: 0.9,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = xPos + gridOffsetX + j * spacing;
      cube.position.y = yPos - (gridOffsetY + i * spacing);
      cube.position.z = zPos;
      if (i == 0 && j == 0) console.log(cube.position.x, cube.position.y);
      if (i == 27 && j == 27) console.log(cube.position.x, cube.position.y);
      // cube.userData.currentText = 255;
      // const sprite = createTextSprite("255");
      // sprite.position.set(0, 0, 0);
      // cube.add(sprite);
      // cube.userData.sprite = sprite;
      cube.material.color.setRGB(1, 1, 1);
      cubeGroup.add(cube);
    }
  }

  return cubeGroup;
}

const grid = new THREE.GridHelper(200, 50);
grid.position.y = -20;
grid.position.z = -40;
scene.add(grid);
/* ===================================================
   Section 6 – Build the 28x28 Grid of Cubes (Layer 0)
   =================================================== */
const inputGroup = createLayer(28, 28, 0, 0, 0);
scene.add(inputGroup);

//Conv1
const convLayer1Groups = [];
convLayer1Groups.push(createLayer(28, 28, -20, 10, -20, 0.5, 0.6));
convLayer1Groups.push(createLayer(28, 28, -20, -10, -20, 0.5, 0.6));
convLayer1Groups.push(createLayer(28, 28, 20, 10, -20, 0.5, 0.6));
convLayer1Groups.push(createLayer(28, 28, 20, -10, -20, 0.5, 0.6));
convLayer1Groups.forEach((g) => scene.add(g));

//Pool1
const poolLayer1Groups = [];
poolLayer1Groups.push(createLayer(14, 14, -20, 8, -40, 0.5, 0.6));
poolLayer1Groups.push(createLayer(14, 14, -20, -8, -40, 0.5, 0.6));
poolLayer1Groups.push(createLayer(14, 14, 20, 8, -40, 0.5, 0.6));
poolLayer1Groups.push(createLayer(14, 14, 20, -8, -40, 0.5, 0.6));
poolLayer1Groups.forEach((g) => scene.add(g));

//Conv1
const convLayer2Groups = [];
convLayer2Groups.push(createLayer(14, 14, -30, 8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, -30, -8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, -10, 8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, -10, -8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, 10, 8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, 10, -8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, 30, 8, -60, 0.5, 0.6));
convLayer2Groups.push(createLayer(14, 14, 30, -8, -60, 0.5, 0.6));
convLayer2Groups.forEach((g) => scene.add(g));

//Pool2
const poolLayer2Groups = [];
poolLayer2Groups.push(createLayer(7, 7, -15, 5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, -15, -5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, -5, 5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, -5, -5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, 5, 5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, 5, -5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, 15, 5, -80, 0.5, 0.6));
poolLayer2Groups.push(createLayer(7, 7, 15, -5, -80, 0.5, 0.6));
poolLayer2Groups.forEach((g) => scene.add(g));

//Fc1
const fc1Group = createLayer(20, 1, 0, 0, -100);
scene.add(fc1Group);

//Fc2
const fc2Group = createLayer(10, 1, 0, 0, -120);
scene.add(fc2Group);

const pool2ToFc1LinesGroup = [];
poolLayer2Groups.forEach((group, idx) => {
  const pool2ToFc1Lines = createConnectionLines(group, fc1Group);
  scene.add(pool2ToFc1Lines);
  pool2ToFc1LinesGroup.push(pool2ToFc1Lines);
});

const fc1ToFc2Lines = createConnectionLines(fc1Group, fc2Group);
scene.add(fc1ToFc2Lines);

/* ===================================================
   Section 9 – Create Connection Lines Between Layers
   =================================================== */
// (a) Grid → Layer 1:

// (c) Layer 2 → Output:
/* ===================================================
   Section 10 – Update All Layers
   =================================================== */
function updateAllLayers() {
  let pixels2D = cropAndResizeTo28x28Matrix(
    drawCanvas,
    croppedCanvas,
    resizedCanvas
  );

  let inputValues = generateInputLayerArrayFrom2DPixels(pixels2D);
  updateCubesColorFrom2DPixels(inputGroup, math.divide(pixels2D, 255));
  //Conv1
  const conv1LayerOutput = convForwardPass(
    [math.reshape(inputValues, [28, 28])],
    conv1Weight,
    conv1Bias,
    1,
    1,
    3
  );
  const reluConv1LayerOutput = reluMatrix(conv1LayerOutput);
  convLayer1Groups.forEach((group, idx) => {
    updateCubesColorFrom2DPixels(
      group,
      normalize2DArray(reluConv1LayerOutput[idx]),
      [1, 0, 0]
    );
  });
  // console.log("conv1:", reluConv1LayerOutput);

  //Pool1
  const pool1LayerOutput = reluConv1LayerOutput.map((output) =>
    maxPool2d(output, 2)
  );
  // console.log("pool1:", pool1LayerOutput);
  poolLayer1Groups.forEach((group, idx) => {
    updateCubesColorFrom2DPixels(
      group,
      normalize2DArray(pool1LayerOutput[idx]),
      [0, 1, 0]
    );
  });

  //Conv2
  const conv2LayerOutput = convForwardPass(
    pool1LayerOutput,
    conv2Weight,
    conv2Bias,
    1,
    1,
    3
  );
  const reluConv2LayerOutput = reluMatrix(conv2LayerOutput);
  convLayer2Groups.forEach((group, idx) => {
    updateCubesColorFrom2DPixels(
      group,
      normalize2DArray(reluConv2LayerOutput[idx]),
      [1, 0, 0]
    );
  });
  // console.log("conv2:", reluConv2LayerOutput);

  //Pool2
  const pool2LayerOutput = reluConv2LayerOutput.map((output) =>
    maxPool2d(output, 2)
  );
  poolLayer2Groups.forEach((group, idx) => {
    updateCubesColorFrom2DPixels(
      group,
      normalize2DArray(pool2LayerOutput[idx]),
      [0, 1, 0]
    );
  });
  // console.log("pool2:", pool2LayerOutput);

  // flatten to FC layer
  const fcLayer1Input = math.flatten(pool2LayerOutput);
  const fcLayer1Output = reluMatrix(
    forwardPass(fcLayer1Input, fc1Weight, fc1Bias)
  );
  updateCubesColorFrom2DPixels(
    fc1Group,
    normalize2DArray(fcLayer1Output.map((v) => [v]))
  );

  const fcLayer2Output = forwardPass(fcLayer1Output, fc2Weight, fc2Bias);
  updateCubesColorFrom2DPixels(
    fc2Group,
    normalize2DArray(fcLayer2Output.map((v) => [v]))
  );
  let maxValue = Math.max(...fcLayer2Output);
  let answerIndex = fcLayer2Output.indexOf(maxValue);
  guessResultNode.innerText = "Guess: " + answerIndex;
  const answerCube = fc2Group.children[answerIndex];
  answerCube.material.color.setRGB(1, 1, 0);
}

function addPadding(matrix, padding) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create a padded matrix filled with zeros
  const paddedMatrix = math
    .zeros(rows + 2 * padding, cols + 2 * padding)
    .toArray();

  // Copy the original matrix into the padded matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      paddedMatrix[i + padding][j + padding] = matrix[i][j];
    }
  }

  return paddedMatrix;
}

function convForwardPass(
  inputMatrix,
  convWeights,
  convBias,
  stride,
  padding,
  kernelSize
) {
  const height =
    Math.floor((inputMatrix[0].length + 2 * padding - kernelSize) / stride) + 1;
  const width =
    Math.floor((inputMatrix[0][0].length + 2 * padding - kernelSize) / stride) +
    1;
  const convOutputs = [];
  for (let outChannel in convWeights) {
    let aggreagtedOutput = math.zeros(height, width).toArray();
    const bias = convBias[outChannel];
    for (let inChannel in convWeights[outChannel]) {
      const inputMatrixPadded = addPadding(inputMatrix[inChannel], padding);
      const mask = convWeights[outChannel][inChannel];
      const output = math.zeros(height, width).toArray();
      for (
        let row = 0;
        row < inputMatrixPadded.length - (kernelSize - 1);
        row++
      ) {
        for (
          let col = 0;
          col < inputMatrixPadded[row].length - (kernelSize - 1);
          col++
        ) {
          // console.log(`row:${row} col:${col}`,output)
          output[row][col] = elementWiseDot(
            inputMatrixPadded,
            row,
            col,
            kernelSize,
            mask
          );
        }
      }
      aggreagtedOutput = math.add(aggreagtedOutput, output);
    }
    convOutputs.push(math.add(aggreagtedOutput, bias));
  }

  return convOutputs;
}

function normalize2DArray(array, newMin = 0, newMax = 1) {
  // Flatten the 2D array to find the global min and max values
  const flatArray = math.flatten(array);
  const minValue = math.min(flatArray);
  const maxValue = math.max(flatArray);

  // Handle the edge case where all values are the same
  if (minValue === maxValue) {
    return math.map(array, () => newMin); // Return an array of newMin values
  }

  // Normalize each element using the custom range formula
  return math.map(
    array,
    (value) =>
      newMin + ((value - minValue) * (newMax - newMin)) / (maxValue - minValue)
  );
}

function elementWiseDot(inputMatrix, startRow, startCol, kernelSize, mask) {
  let sum = 0;
  for (let i = 0; i < kernelSize; i++) {
    for (let j = 0; j < kernelSize; j++) {
      sum += inputMatrix[startRow + i][startCol + j] * mask[i][j];
    }
  }
  return sum;
}

/* ===================================================
   Section 11 – Animation Loop and Window Resize Handling
   =================================================== */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

fetch("simple_cnn_model.json")
  .then((response) => response.json())
  .then((params) => {
    const state_dict = params.state_dict;
    conv1Weight = state_dict["conv1.weight"];
    conv1Bias = state_dict["conv1.bias"];
    conv2Weight = state_dict["conv2.weight"];
    conv2Bias = state_dict["conv2.bias"];
    fc1Weight = state_dict["fc1.weight"];
    fc1Bias = state_dict["fc1.bias"];
    fc2Weight = state_dict["fc2.weight"];
    fc2Bias = state_dict["fc2.bias"];

    // console.log("conv1 weight", math.matrix(conv1Weight).size().toString());
    // console.log("conv2 weight", math.matrix(conv2Weight).size().toString());
    pool2ToFc1LinesGroup.forEach((lines, idx) => {
      updateConnectionLinesColor(lines, fc1Weight);
    });

    updateConnectionLinesColor(fc1ToFc2Lines, fc2Weight);

    updateAllLayers();
  });
