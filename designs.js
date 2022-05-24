// Select color input
const selectColor = document.getElementById('colorPicker');
// Select size input
const selectHeight = document.getElementById('inputHeight');
const selectWidth = document.getElementById('inputWidth');
const selectButton = document.querySelector('input.select');

// When size is submitted by the user, call makeGrid()
selectButton.addEventListener('click'; makeGrid);

function makeGrid() {
  //Defining Row Variable
  const drawGridRow = document.createElement('tr');
  
  //Drawing Grid Boxes
  for (let i = 1; i <= selectHeight; i++) {
    const drawGridColumn = document.createElement('td');
    for (let j = 1; j <= selectWidth; j++) {
      drawGridRow.appendChild(drawGridColumn);
    }
  }
  //Attaching Grid Boxes to table
  document.body.table.appendChild(drawGridRow);
// Your code goes here!

}
