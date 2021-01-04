// create a variable resolution, which will save user input from the #user-resolution
document.addEventListener('DOMContentLoaded', function() {
    let resolution = 16;
    // selecting the parent element for all the divs
    const canvas = document.querySelector('#sketch-pad');
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
});
// it should be 16 default, but user will be able to change it

// create 16x16 divs inside of the #sketch-pad div with javascript using resolution as limit
// function createCanvasDivs

// the same function should be called if user changes resolution with the form

// change class of the created divs on hover

// create various classes for the palette and change the class depending on user choice