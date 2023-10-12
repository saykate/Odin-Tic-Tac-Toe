//why would the Players need an object?
//create Players per the project instructions

const gameBoard = (() => {
    const gameCell = document.querySelectorAll('.game-cell');

    const gameArray = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];

    let currentPlayer = 'X';

      //draw the X or O in the cell based on who's turn it is 
    const draw = (cell, player) => { 
        console.log('draw started') 

        if (player === 'X') {
        cell.classList.add('x-img');
    } else {
        cell.classList.add('o-img');
    }}

         //switch which player is the current player 
    const togglePlayer = () => {    
         if(currentPlayer === 'X') {
             currentPlayer = 'O';
         } else if (currentPlayer === 'O') {
             currentPlayer = 'X';
    }       console.log("player switched") }

    const checkWinner = function() {
        console.log("winner check started")
        if((gameArray[0][0] === currentPlayer && gameArray[0][1] === currentPlayer && gameArray[0][2] === currentPlayer) ||
            (gameArray[1][0] === currentPlayer && gameArray[1][1] === currentPlayer && gameArray[1][2] === currentPlayer) ||
            (gameArray[2][0] === currentPlayer && gameArray[2][1] === currentPlayer && gameArray[2][2] === currentPlayer) || 
            (gameArray[0][0] === currentPlayer && gameArray[1][0] === currentPlayer && gameArray[2][0] === currentPlayer) || 
            (gameArray[0][1] === currentPlayer && gameArray[1][1] === currentPlayer && gameArray[2][1] === currentPlayer) || 
            (gameArray[0][2] === currentPlayer && gameArray[1][2] === currentPlayer && gameArray[2][2] === currentPlayer) || 
            (gameArray[0][0] === currentPlayer && gameArray[1][1] === currentPlayer && gameArray[2][2] === currentPlayer) || 
            (gameArray[0][2] === currentPlayer && gameArray[1][1] === currentPlayer && gameArray[2][0] === currentPlayer)) {
                alert(`${currentPlayer}'s for the WIN!!!`);
            } else {
            return
        }
    }

    const playGame = function(event) {  
        console.log('game play started') 
        //update the array to signify which player has played which cell  
        if (gameArray[event.target.id[0]][event.target.id[1]] !== null) {
            return
        }
        else if(gameArray[event.target.id[0]][event.target.id[1]] === null) {
            gameArray[event.target.id[0]][event.target.id[1]] = (currentPlayer);
        }

       draw(event.target, currentPlayer);

       setTimeout(checkWinner, 1); 
        // checkWinner();

       togglePlayer();

    };

       //listen to clicks on each game cell
    gameCell.forEach(cell => {
         cell.addEventListener('click', playGame);
    })

})();

  