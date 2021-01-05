// create a variable resolution, which will save user input from the #user-resolution
document.addEventListener('DOMContentLoaded', function() {
    // resolution is 16x16 (range slider starter value) default     
    let resolution = document.querySelector('#range-slider').value;
    createCanvasGrid(resolution);

    document.querySelector("form").onsubmit = function (){
        // save user resolution choice depending on their slider input
        resolution = document.querySelector('#range-slider').value;
        createCanvasGrid(resolution);
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