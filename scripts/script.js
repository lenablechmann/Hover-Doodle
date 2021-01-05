// create a variable resolution, which will save user input from the #user-resolution
document.addEventListener('DOMContentLoaded', function() {
        if(!localStorage.getItem('resolution')) {
        // using localStorage to save user choice, otherwise site resets on 
        // submit. tried return false on form submit, but the grid wont fill fully
        localStorage.setItem('resolution', 16);
    }
    let resolution = localStorage.getItem('resolution');
    createCanvasGrid(resolution);

    document.querySelector("form").onsubmit = function (){
        // changes canvas size upon user slider change
        resolution = parseInt(document.querySelector('#range-slider').value);
        createCanvasGrid(resolution);
        localStorage.setItem('resolution', resolution);
    };
});

function createCanvasGrid(resolution){
    const canvas = document.querySelector('#sketch-pad');
    // dynamically changing resolution of the css grid
    canvas.style.gridTemplate = `repeat(${resolution}, 1fr) / repeat(${resolution}, 1fr)`
    // creating the grid
    for (let column = 0; column < resolution * resolution; column++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
}


// the same function should be called if user changes resolution with the form

// change class of the created divs on hover

// create various classes for the palette and change the class depending on user choice