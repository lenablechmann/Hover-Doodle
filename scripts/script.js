// create a variable resolution, which will save user input from the #user-resolution
document.addEventListener('DOMContentLoaded', function() {
        if(!localStorage.getItem('resolution')) {
        // using localStorage to save user choice, otherwise site resets on 
        // submit. tried "return false" on form submit, but the grid wont fill fully
        localStorage.setItem('resolution', 16);
    }
    let resolution = localStorage.getItem('resolution');
    createCanvasGrid(resolution);
    // accomodate for the updated resolution on the resolution slider starter value

    document.querySelector("form").onsubmit = function (){
        // changes canvas size upon user slider change
        resolution = parseInt(document.querySelector('#range-slider').value);
        createCanvasGrid(resolution);
        localStorage.setItem('resolution', resolution);
    };

    let sketchPad = document.querySelector('#sketch-pad');
    sketchPad.addEventListener('mouseenter', recolorPixel);
});

function createCanvasGrid(resolution){
    const canvas = document.querySelector('#sketch-pad');
    // dynamically changing resolution of the css grid
    canvas.style.gridTemplate = `repeat(${resolution}, 1fr) / repeat(${resolution}, 1fr)`
    // creating the grid
    for (let cell = 0; cell < resolution * resolution; cell++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
}

function recolorPixel(){
    console.log("wow, you hovered");
    
    const pixelsArray = document.querySelectorAll('.pixel');
    pixelsArray.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            console.log("ooh a pixel");
        });
    });
}

// the same function should be called if user changes resolution with the form

// change class of the created divs on hover

// create various classes for the palette and change the class depending on user choice