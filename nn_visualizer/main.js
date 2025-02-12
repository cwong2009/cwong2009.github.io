import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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

const layer1BoxCount = 20; // Layer 1: 20 boxes
const layer2BoxCount = 20; // Layer 2: 20 boxes
const outputBoxCount = 10; // Output layer: 10 boxes

let fcWeightLayer1 = [];
let fcBiasLayer1 = [];
let fcWeightLayer2 = [];
let fcBiasLayer2 = [];
let fcWeightOutput = [];
let fcBiasOutput = [];

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
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 50);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enableZoom = true;
controls.enablePan = true;

const baseCubeSize = 1,
  spacing = 1.2;
function createLayer(numRow, numCol, xPos, yPos, zPos) {
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
        transparent: true, // Enable transparency
        opacity: 0.9, // 50% transparent
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

/* ===================================================
   Section 6 – Build the 28x28 Grid of Cubes (Layer 0)
   =================================================== */
const inputGroup = createLayer(28, 28, 0, 0, 0);
scene.add(inputGroup);

// Layer 1 (behind grid at z = -15), 20 boxes.
const layer1Group = createLayer(layer1BoxCount, 1, 0, 0, -15);
scene.add(layer1Group);

// Layer 2 (behind Layer 1 at z = -30), 20 boxes.
const layer2Group = createLayer(layer2BoxCount, 1, 0, 0, -30);
scene.add(layer2Group);

// Output Layer (Layer 3, behind Layer 2 at z = -40), 10 boxes.
const outputGroup = createLayer(outputBoxCount, 1, 0, 0, -45);
scene.add(outputGroup);

/* ===================================================
   Section 9 – Create Connection Lines Between Layers
   =================================================== */
// (a) Grid → Layer 1:
const inputToLayer1Lines = createConnectionLines(inputGroup, layer1Group);
scene.add(inputToLayer1Lines);
const layer1ToLayer2Lines = createConnectionLines(layer1Group, layer2Group);
scene.add(layer1ToLayer2Lines);
const layer2ToOutputLines = createConnectionLines(layer2Group, outputGroup);
scene.add(layer2ToOutputLines);

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
  updateCubesColorFrom2DPixels(inputGroup, pixels2D);

  const layer1Values = forwardPass(inputValues, fcWeightLayer1, fcBiasLayer1);
  const normalizedLayer1Values = normalizeArray(layer1Values);
  updateLayerCubeColor(layer1Group, normalizedLayer1Values);

  const layer2Values = forwardPass(layer1Values, fcWeightLayer2, fcBiasLayer2);
  const normalizedLayer2Values = normalizeArray(layer2Values);
  updateLayerCubeColor(layer2Group, normalizedLayer2Values);

  const outputValues = forwardPass(layer2Values, fcWeightOutput, fcBiasOutput);
  const normalizedOutputValues = normalizeArray(outputValues);
  updateLayerCubeColor(outputGroup, normalizedOutputValues);

  const answerIndex = outputValues.indexOf(Math.max(...outputValues));
  guessResultNode.innerText = "Guess: " + answerIndex;
  outputGroup.children[answerIndex].material.color.setRGB(1, 1, 0);

  // --- Update Connection Lines for Grid → Layer 1 using fcWeight.
  updateConnectionLinesColor(inputToLayer1Lines, fcWeightLayer1);
  updateConnectionLinesColor(layer1ToLayer2Lines, fcWeightLayer2);
  updateConnectionLinesColor(layer2ToOutputLines, fcWeightOutput);
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

fetch("model_info.json")
  .then((response) => response.json())
  .then((params) => {
    console.log(params);
    const state_dict = params.state_dict;
    // Now params is an object where keys are the layer names
    // e.g., params["layer1.weight"] gives you a nested array of weights.
    fcWeightLayer1 = state_dict["fc1.weight"];
    console.log(fcWeightLayer1);
    fcBiasLayer1 = state_dict["fc1.bias"];
    fcWeightLayer2 = state_dict["fc2.weight"];
    fcBiasLayer2 = state_dict["fc2.bias"];
    fcWeightOutput = state_dict["fc3.weight"];
    fcBiasOutput = state_dict["fc3.bias"];

    updateAllLayers();
  });
