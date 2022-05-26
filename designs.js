// Select color input
let selectColor = document.querySelector('#colorPicker');
// Select size input
let selectHeight = document.querySelector('#inputHeight').getAttribute('value');
let selectWidth = document.querySelector('#inputWidth').getAttribute('value');
const selectButton = document.querySelector('input[type="submit"]');
var completeGrid = document.querySelector('table#pixelCanvas').innerHTML;

// When size is submitted by the user, call makeGrid()
selectButton.addEventListener('click', makeGrid);



function makeGrid() {
  //Drawing Grid Boxes.
  for (let i = 1; i <= selectHeight; i++) {
    const drawGridRow = document.createElement('tr'); //Creating a Grid Row.
    drawGridRow;
    //console.log('row');
    for (let j = 1; j <= selectWidth; j++) {
      const drawGridBox = document.createElement('td'); //Creating a Grid Box.
      drawGridBox;
      //drawGridBox.addEventListener('click'; paintPixel);
      drawGridRow.appendChild(drawGridBox); //Attaching Boxes to Row.
      console.log('box');
    }
  }

  //Attaching Grid Boxes to completeGrid.
  completeGrid.appendChild(drawGridRow);
}

function paintPixel() {
  //
}
