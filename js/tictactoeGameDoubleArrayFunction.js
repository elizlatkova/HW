// целта е да представим в JavaScript двумерна дъска за игра, (например - "Морски шах"), която в последствие ще можем лесно да променяме за да отразим текущото състояние на играта.
//   -----------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | x | 0 |
//   -----------
//      фиг.1

// Двумерен масив:
//
//     j: 0  1   2
//  i: ------------
//   0 | 0 | 0 | 0| -> row1 ( i = 0)
//   - -----------
//   1 | 0 | 0 | 0| -> row2 ( i = 1)
//   - -----------
//   2 | 1 | x | 0| -> row3 ( i = 2)
//     ------------
//
let board2d = [
	[ 0,  0 , 0 ],
	[ 0,  0 , 0 ],
	[ 0, 'x', 0 ]
];

// TASK:
// дефинирайте функция setX( i, j), с два параметъра:
// 		i    : индекса на реда (започва от 0)
// 		j    : индекса на колона (започва от 0),
// която ще запише 'x' в дадената клетка на board2d

// ---> YOUR CODE HERE <---
function setX( i, j){
    board2d[i][j] = 'x';
}

// TEST
// извикване на функцията setX()
setX(0, 1);
showConsoleBoard( board2d );// За да видите текущото състояние на дъската за игра, след извикването на setX(0, 1) използвайте функцията:
setX(2, 0);
showConsoleBoard( board2d );

// дефиниция на функцията showConsoleBoard()"
function showConsoleBoard( board ){	
	let boardStr = "";
	for (let i = 0; i < board.length; i++) {
		boardStr += "|";		

		for (let j = 0; j < board[i].length; j++) {
			boardStr += board[i][j] + "|";
		}
		boardStr += "\n";
	}

	console.log(boardStr);
}