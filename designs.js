// Select color input
const selectColor = document.querySelector('#colorPicker');
// Select size input
const selectHeight = document.querySelector('#inputHeight');
const selectWidth = document.querySelector('#inputWidth');
const selectButton = document.querySelector('input[type='select']');
const completeGrid = document.querySelector('#pixelCanvas').innerHTML;

// When size is submitted by the user, call makeGrid()
selectButton.addEventListener('click'; makeGrid);



function makeGrid() {
  //Drawing Grid Boxes.
  for (let i = 1; i <= selectHeight; i++) {
    const drawGridRow = document.createElement('tr'); //Creating a Grid Row.
    //console.log('row');
    for (let j = 1; j <= selectWidth; j++) {
      const drawGridBox = document.createElement('td'); //Creating a Grid Box.
      drawGridRow.appendChild(drawGridBox); //Attaching Box to Row.
      console.log('box');
      //drawGridBox.addEventListener('click'; paintPixel);
    }
  }
  
  //Attaching Grid Boxes to completeGrid.
  document.table.appendChild(drawGridRow);
}

function paintPixel() {
  //
}
