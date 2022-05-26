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
  //Defining Row Variable.
  const drawGridRow = document.createElement('tr');
  
  //Drawing Grid Boxes.
  for (let i = 1; i <= selectHeight; i++) {
    drawGridRow;
    const drawGridColumn = document.createElement('td');
    for (let j = 1; j <= selectWidth; j++) {
      drawGridRow.appendChild(drawGridColumn);
    }
  }
  
  //Attaching Grid Boxes to completeGrid.
  completeGrid.appendChild(drawGridRow);

}
