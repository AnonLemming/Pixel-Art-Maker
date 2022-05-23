// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  //Defining Row Variable
  const drawGridRow = document.createElement('tr');
  
  //Drawing Grid Boxes
  for (let i = 1; i <= (document.getElementById('inputHeight')); i++) {
    const drawGridColumn = document.createElement('td');
    for (let j = 1; j <= (document.getElementById('inputWidth')); j++) {
      drawGridRow.appendChild(drawGridColumn);
    }
  }
  //Attaching Grid Boxes to table
  document.body.table.appendChild(drawGridRow);
// Your code goes here!

}
