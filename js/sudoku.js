function Sudoku(){

}

Sudoku.prototype.createSudokuGrid = function(){
  var htmlText = '';
  for(var row = 1; row <= 9 ; row++){
  htmlText += '<tr>'
    for(var col = 1; col <= 9; col++) {
       htmlText += '<td class="sudokuRow'+row+' sudokuCell" id="cell_' + row + '_' + col + '">&nbsp;</td>';
    }
    htmlText += '</tr>';
  }
  $('#sudokuTable').html(htmlText);
}
var inputNumber = 1;
Sudoku.prototype.clicked = function(){
cellId = this.id;
if ($('#' + cellId).text() == inputNumber) {
    $('#' + cellId).text('&nbsp;');
  } else {
      $('#' + cellId).text(inputNumber);
  }
}

 Sudoku.prototype.selectNumber= function() {
    inputNumber = this.innerText;
    $('.numberSelector').removeClass('selectedNumber');
    $(this).addClass('selectedNumber');
 }
 rowsArray = [];
 allRows = [];
 Sudoku.prototype.checkrows = function () {
   for(var row = 1; row <=9 ; row++){
     for(var col = 1; col <= 9; col ++){
     rowsArray.push($('#cell_'+ row + '_' +col).text())
      }
    }
    while (rowsArray.length > 0)
     allRows.push(rowsArray.splice(0, 9));
   alert(allRows)
 };


// exports.sudokuModule = Sudoku;


$(document).ready(function(){
console.log("hi");
var mySudoku = new Sudoku();
mySudoku.createSudokuGrid();
$('#sudokuTable').on('click','.sudokuCell', mySudoku.clicked);
$('.numberSelector').on('click', mySudoku.selectNumber);
$('#check').on('click',mySudoku.checkrows);
});
