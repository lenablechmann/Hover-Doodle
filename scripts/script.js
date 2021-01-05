document.addEventListener('DOMContentLoaded', function() {
    let color = "black";
    const paletteColor = document.querySelectorAll(".palette");
    paletteColor.forEach((button) => {
        // get undefined when I use arrow function here
        button.addEventListener('click', function (event){ 
            // making of palette button colors
            console.log(this.id);
            switch (parseInt(this.id)){
            case 1:
                color = "navy";
                break;
            case 2 :
                color = "maroon";
                break;
            case 3 :
                color = "oliveDrab"
                break;
            case 4:
                color = "black"
                break;
            }
            recolorPixels(color);
        });
    });

    document.getElementById("clear").onclick = clearCanvas;

    /* using localStorage to save user resolution choice, otherwise site resets on 
     submit. tried "return false" on form submit, but the grid wont fill fully */
    if(!localStorage.getItem('resolution')) {
        localStorage.setItem('resolution', 16);
    }

    let resolution = localStorage.getItem('resolution');
    createCanvasGrid(resolution);

    document.querySelector("form").onsubmit = function (){
        // changes canvas size upon user slider change + submit (which are all part of the form)
        resolution = parseInt(document.querySelector('#range-slider').value);
        createCanvasGrid(resolution);
        localStorage.setItem('resolution', resolution);
    };

    // the drawing function gets called once user hovers over the parent div of all
    let sketchPad = document.querySelector('#sketch-pad');
    sketchPad.addEventListener('mouseenter', recolorPixels(color));
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

function recolorPixels(color){
    console.log("wow, you hovered over the canvas!");
    
    const pixelsArray = document.querySelectorAll('.pixel');
    pixelsArray.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = color;
        });
    });
}

function clearCanvas(){
    console.log("so you wanna clear it huh");
    const pixelsArray = document.querySelectorAll('.pixel');
    pixelsArray.forEach((element) => {
            element.style.backgroundColor = "white";
        });
}
