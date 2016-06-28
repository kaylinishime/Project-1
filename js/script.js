var board = ['','','','','','','','','']
var turn = 'X'

//selectors
var squares = document.querySelectorAll('.square');

//set up click listeners for my squares
for (var i=0; i<9; i++) {
  squares[i].addEventListener('click', function(e) {
    var squareIndex = getSquareIndex(e.target)
    if (board[squareIndex] == ""){
      board[squareIndex] = turn
      drawBoard()
      switchTurn()
    }
  })
}
    // loop through squares again and check which node was clicked
//     for (var j=0; j<9; j++) {
//       if (squares[j] === e.target && board[j] === "") {
//         board[j] = turn;
//         drawBoard()
//         switchTurn()
//       }
//     }
//   })
// }
//given an HTML element, it will determin the index of the square on the board
function getSquareIndex(target) {
  for (var j=0; j<9; j++) {
    // check if the currented iterated square is the square that was clicked
    if (squares[j] === target) {
      return j; //return the index, not the DOM node
    }
}
}
//drawing the model to the screen
function drawBoard (){
   for (var i=0; i<9; i++) {
     squares[i].innerHTML = board[i];
   }
}

//switching turns
function switchTurn () {
  if (turn === 'X') {
    turn = "O"
  }
    else {
      turn = "X"
}
}
