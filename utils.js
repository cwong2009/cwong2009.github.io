import * as THREE from "three";
import * as math from "mathjs";

export function normalizeArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return arr.map((x) => (x - min) / (max - min));
}

function getDrawBoundary(canvas) {
  const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
  });
  const width = canvas.width;
  const height = canvas.height;
  const imageData = ctx.getImageData(0, 0, width, height).data;

  let minX = width,
    maxX = 0,
    minY = height,
    maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      let r = imageData[index];
      let g = imageData[index + 1];
      let b = imageData[index + 2];
      let a = imageData[index + 3];

      // Any non-white pixel is considered part of the drawing
      if (r !== 255 || g !== 255 || b !== 255 || a !== 255) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < minX || maxY < minY) return null; // No drawing found

  let centerX = (minX + maxX) / 2;
  let centerY = (minY + maxY) / 2;
  let side = Math.max(maxX - minX, maxY - minY);

  let newLeft = Math.max(0, Math.round(centerX - side / 2));
  let newTop = Math.max(0, Math.round(centerY - side / 2));
  let newRight = Math.min(width, newLeft + side);
  let newBottom = Math.min(height, newTop + side);

  // return { x: squareMinX, y: squareMinY, size: squareMaxX - squareMinX };
  return [newLeft, newTop, newRight, newBottom];
}

export function cropAndResizeTo28x28Matrix(
  sourceCanvas,
  croppedCanvas,
  resizedCanvas
) {
  const squareBBox = getDrawBoundary(sourceCanvas);
  if (!squareBBox) {
    return Array.from({ length: 28 }, () => Array(28).fill(255));
  }

  const [left, top, right, bottom] = squareBBox;
  const cropWidth = right - left;
  const cropHeight = bottom - top;

  // Create an offscreen canvas for the cropped region.
  croppedCanvas.width = cropWidth;
  croppedCanvas.height = cropHeight;
  const croppedCtx = croppedCanvas.getContext("2d");
  croppedCtx.drawImage(
    sourceCanvas,
    left,
    top,
    cropWidth,
    cropHeight,
    0,
    0,
    cropWidth,
    cropHeight
  );

  const resizedCtx = resizedCanvas.getContext("2d", {
    willReadFrequently: true,
  });
  resizedCtx.drawImage(
    croppedCanvas,
    0,
    0,
    cropWidth,
    cropHeight,
    0,
    0,
    28,
    28
  );

  // Extract image data and build a nested array (matrix).
  const finalData = resizedCtx.getImageData(0, 0, 28, 28).data;
  const pixelMatrix = [];
  for (let y = 0; y < 28; y++) {
    const row = [];
    for (let x = 0; x < 28; x++) {
      const index = (y * 28 + x) * 4;
      // Assuming a grayscale drawing, we use the red channel.
      const gray = finalData[index];
      row.push(gray);
    }
    pixelMatrix.push(row);
  }
  return pixelMatrix;
}

export function createConnectionLines(cubeGroupFrom, cubeGroupTo) {
  const numCubeFrom = cubeGroupFrom.children.length;
  const numCubeTo = cubeGroupTo.children.length;
  const totalLines = numCubeTo * numCubeFrom;
  const totalVertices = totalLines * 2;
  const positions = new Float32Array(totalVertices * 3);
  const connectionLineColors = new Float32Array(totalVertices * 3).fill(1.0);
  let idx = 0;
  for (let j = 0; j < numCubeFrom; j++) {
    const fromPos = new THREE.Vector3();
    for (let i = 0; i < numCubeTo; i++) {
      const toPos = new THREE.Vector3();
      cubeGroupTo.children[i].getWorldPosition(toPos);
      cubeGroupFrom.children[j].getWorldPosition(fromPos);
      [fromPos, toPos].forEach((pos) => {
        positions[idx * 3] = pos.x;
        positions[idx * 3 + 1] = pos.y;
        positions[idx * 3 + 2] = pos.z;
        idx++;
      });
    }
  }
  const connectionLineGeometry = new THREE.BufferGeometry();
  connectionLineGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  connectionLineGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(connectionLineColors, 3)
  );
  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    linewidth: 1,
    transparent: true,
    opacity: 0.2,
  });
  return new THREE.LineSegments(connectionLineGeometry, material);
}

export function relu(x) {
  return Math.max(0, x);
}

export function reluMatrix(matrix) {
  return math.map(matrix, (value) => Math.max(0, value));
}

export function normalizeNestedMatrix(matrix) {
  // Flatten the nested matrix to a 1-D array
  const flat = math.flatten(matrix);
  // Compute the minimum and maximum
  const minVal = math.min(flat);
  const maxVal = math.max(flat);

  // Optionally, if all values are the same, return a matrix of 0.5
  if (maxVal === minVal) {
    return math.map(matrix, () => 0.5);
  }

  // Now, use math.map to apply a function element‐wise that uses the original structure:
  return math.map(matrix, function (value) {
    return (value - minVal) / (maxVal - minVal);
  });
}

export function updateConnectionLinesColor(lines, weight) {
  if (lines && lines.geometry) {
    const normalizedWeightMatrix = normalizeNestedMatrix(weight);
    const colorAttr = lines.geometry.getAttribute("color");
    let idx = 0;
    for (let i = 0; i < normalizedWeightMatrix.length; i++) {
      const normalizedWeights = normalizedWeightMatrix[i];
      for (let j = 0; j < normalizedWeights.length; j++) {
        const weightVal = normalizedWeights[j];
        for (let k = 0; k < 6; k++) {
          colorAttr.array[idx++] = weightVal;
        }
      }
    }
    colorAttr.needsUpdate = true;
  }
}

function toTensor(imageData) {
  return imageData.map((row) => row.map((pixel) => pixel / 255)); // Normalize to [0,1]
}

function normalize(tensor, mean = 0.5, std = 0.5) {
  return tensor.map((row) => row.map((pixel) => (pixel - mean) / std));
}

export function generateInputLayerArrayFrom2DPixels(pixels) {
  pixels = normalize(toTensor(pixels));
  const width = pixels.length;
  const height = pixels[0].length;
  let result = new Array(width * height);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const grayVal = pixels[i][j];
      const realIndex = i * 28 + j;
      result[realIndex] = grayVal;
    }
  }
  return result;
}

export function updateCubesColorFrom2DPixels(
  cubeGroup,
  pixels,
  colorOffset = [1, 1, 1]
) {
  const rowNum = pixels.length;
  const colNum = pixels[0].length;
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      //   const cubeRow = height - 1 - i; // flip vertical
      const cubeIndex = i * colNum + j;
      const cube = cubeGroup.children[cubeIndex];
      const norm = pixels[i][j];
      cube.material.color.setRGB(
        norm * colorOffset[0],
        norm * colorOffset[1],
        norm * colorOffset[2]
      );
    }
  }
}

export function forwardPass(inputValues, weights, biases) {
  return math.add(
    math.multiply([inputValues], math.transpose(weights)),
    biases
  )[0];
}

export function updateLayerCubeColor(cubeGroup, layerValues) {
  const normalizedLayerValues = normalizeArray(layerValues);
  for (let i = 0; i < normalizedLayerValues.length; i++) {
    const normVal = normalizedLayerValues[i];
    const box = cubeGroup.children[i];
    box.material.color.setRGB(normVal, normVal, normVal);
  }
}

/**
 * Applies 2D max pooling on a 2D array.
 *
 * @param {Array} input - Input 2D array of shape [H, W].
 * @param {number|Array} kernelSize - Size of the pooling kernel (scalar or [height, width]).
 * @param {number|Array} [stride] - Stride of the pooling operation (default = kernelSize).
 * @param {number|Array} [padding=0] - Padding size (default = 0).
 * @returns {Array} - Output 2D array after max pooling.
 */
export function maxPool2d(input, kernelSize, stride = null, padding = 0) {
  // Ensure kernelSize is an array
  if (!Array.isArray(kernelSize)) {
    kernelSize = [kernelSize, kernelSize];
  }

  // Ensure stride is set (default to kernelSize)
  if (stride === null) {
    stride = kernelSize;
  } else if (!Array.isArray(stride)) {
    stride = [stride, stride];
  }

  // Ensure padding is an array
  if (!Array.isArray(padding)) {
    padding = [padding, padding];
  }

  const [H, W] = [input.length, input[0].length]; // Extract dimensions
  const [kH, kW] = kernelSize; // Kernel height and width
  const [sH, sW] = stride; // Stride height and width
  const [pH, pW] = padding; // Padding height and width

  // Calculate output dimensions
  const outH = Math.floor((H + 2 * pH - kH) / sH + 1);
  const outW = Math.floor((W + 2 * pW - kW) / sW + 1);

  // Initialize output array
  const output = Array(outH)
    .fill(0)
    .map(() => Array(outW).fill(0));

  // Apply max pooling
  for (let hOut = 0; hOut < outH; hOut++) {
    for (let wOut = 0; wOut < outW; wOut++) {
      let maxVal = -Infinity;

      // Iterate over the pooling window
      for (let kh = 0; kh < kH; kh++) {
        for (let kw = 0; kw < kW; kw++) {
          const hIn = hOut * sH + kh - pH;
          const wIn = wOut * sW + kw - pW;

          // Check if indices are within bounds
          if (hIn >= 0 && hIn < H && wIn >= 0 && wIn < W) {
            const val = input[hIn][wIn];
            if (val > maxVal) {
              maxVal = val;
            }
          }
        }
      }

      // Assign the max value to the output
      output[hOut][wOut] = maxVal;
    }
  }

  return output;
}
