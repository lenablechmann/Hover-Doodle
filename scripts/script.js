// create a variable resolution, which will save user input from the #user-resolution
document.addEventListener('DOMContentLoaded', function() {
    let resolution = 20;
    createGrid(resolution);
});

function createGrid(resolution){
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
// it should be 16 default, but user will be able to change it

// create 16x16 divs inside of the #sketch-pad div with javascript using resolution as limit
// function createCanvasDivs

// the same function should be called if user changes resolution with the form

// change class of the created divs on hover

// create various classes for the palette and change the class depending on user choice