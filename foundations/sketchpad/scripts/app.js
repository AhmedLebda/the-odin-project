"use strict";

// Variables
let padSize;
let drawActive = false;

// DOM Variables
const chooseSizeButton = document.getElementById("choose__size");
const padContainer = document.getElementById("app")

// Get size of the pad from the user
function getSizeOfPad() {
    do {
        padSize = Number(prompt('Choose pad size 1 : 100', 16));
    } while (padSize > 100);
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


// DOM Event Listeners

chooseSizeButton.addEventListener("click", () => {
    getSizeOfPad();
    createBoxes(padSize);

});

// toggle the value of active drawing 
padContainer.addEventListener('mousedown', () => drawActive = true);
padContainer.addEventListener('mouseup', () => drawActive = false );

padContainer.addEventListener("mousemove", (e) => {
    if (e.target.id !== 'app' && drawActive) {
        e.target.classList.add('colored')
    }
})