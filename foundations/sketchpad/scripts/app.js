"use strict";

// Variables
let padSize = 25;
let isDrawActive = false;
let isRandomColor = false;
let isEraserActive = false;

// DOM Variables
const chooseSizeButton = document.getElementById("choose-size");
const padContainer = document.getElementById("app");
const showGrid = document.getElementById("show-grid");
const clearBtn = document.getElementById("clear");
const colorPicker = document.getElementById("pick-color");
const randomColoring = document.getElementById("random-color");
const eraser = document.getElementById("eraser");

// Get size of the pad from the user
function getSizeOfPad() {
    do {
        padSize = Number(prompt('Choose pad size 1 : 100', 16));
    } while (!Number(padSize) || padSize > 100);
} ;

// Create boxes (div) and append them to the sketchpad container 
function createBoxes(size) {  
    let fullSize = size ** 2;

    // Removing any boxes inside the container before adding new ones 
    [...padContainer.children].forEach((child) => child.remove())

    for (let i = 0; i < fullSize; i++) {
        let box = document.createElement("div");
        box.style.minWidth = `${100 / padSize}%`;
        padContainer.appendChild(box);
    }
}

// Create a random color
function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

// Start pad with the default size
createBoxes(padSize);

// DOM Event Listeners

chooseSizeButton.addEventListener("click", () => {
    getSizeOfPad();
    createBoxes(padSize);

});

// toggle the value of active drawing 
padContainer.addEventListener('mousedown', () => isDrawActive = true);
padContainer.addEventListener('mouseup', () => isDrawActive = false );

// Main drawing event listener
padContainer.addEventListener("mousemove", (e) => {
    if (e.target.id !== 'app' && isDrawActive) {
        if (isEraserActive) {
            e.target.style.backgroundColor = `#ffffff`;
        }
        else if (isRandomColor) {
            e.target.style.backgroundColor = `#${getRandomColor()}`;
        } else {
            e.target.style.backgroundColor = colorPicker.value;
        }
    }
})

// Toggle Grid
showGrid.addEventListener("click", () => {
    [...padContainer.children].forEach((child) => child.classList.toggle('show__grid'));
})

// Clear the drawing pad
clearBtn.addEventListener("click", () => {
    [...padContainer.children].forEach((child) => child.style.backgroundColor = '#ffffff');
})

// drawing with a random coloring
randomColoring.addEventListener("click", () => {
    isRandomColor = isRandomColor ? false : true;
    randomColoring.classList.toggle('option__active')  
})

// Toggle eraser
eraser.addEventListener("click", () => {
    isEraserActive = isEraserActive ? false : true;
    eraser.classList.toggle('option__active')  
})
