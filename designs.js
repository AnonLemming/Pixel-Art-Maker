// initial variable declarations
const color = document.querySelector('#colorPicker');  //variable for color input
const height = document.querySelector('#inputHeight');  //variable for height input
const width = document.querySelector('#inputWidth');  //variable for width input
const sizeSelector = document.querySelector('#sizePicker');  //constant for size picker form
const completeGrid = document.querySelector('#pixelCanvas');  //variable for table/grid/canvas
let selectedHeight = height.value;  //variable for height value.
let selectedWidth = width.value;  //variable for width value.
let selectedColor = color.value;  //variable for color value.

//event to change the value of the height.
height.addEventListener('change', function() {
  selectedHeight = height.value;
});

//event to change the value of the width.
width.addEventListener('change', function() {
  selectedWidth = width.value;
});

//event to change the value of the color.
color.addEventListener('change', function() {
  selectedColor = color.value;
})

// When size is submitted by the user, calls makeGrid()
sizeSelector.addEventListener('submit', function(evt){
  evt.preventDefault();  //prevents clearing other input values
  while (completeGrid.firstChild) {  //clears previously created child elements
    completeGrid.removeChild(completeGrid.firstChild);
  }
  makeGrid();  //calls function to create grid/canvas.
});

//Drawing Grid Boxes.
function makeGrid() {
  for (let i = 1; i <= selectedHeight; i++) {
    const drawGridRow = document.createElement('tr');  //Creating a Grid Row.

    for (let j = 1; j <= selectedWidth; j++) {
      const drawGridBox = document.createElement('td');  //Creating a Grid Box.
      drawGridBox.addEventListener('click', paintPixel);  //attached event for coloring pixel/Box.
      drawGridRow.appendChild(drawGridBox);  //Attaching Boxes to Row.
    }
    completeGrid.appendChild(drawGridRow);  //Attaching Rows to completeGrid.
  }
}

//function to color the "pixel/Box" <td> elements
function paintPixel(e) {
  this.style.backgroundColor = selectedColor;
}
