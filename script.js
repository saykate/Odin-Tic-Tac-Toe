//can I put each 'function' inside the gamePlay into an actual function and still 
// access the event? I couldn't just basically, but maybe adding a Return?

//write score checker

//what needs to be in which object?
//why would the Players need an object?
const gameBoard = (() => {
    const gameCell = document.querySelectorAll('.game-cell');

    const gameArray = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];

    const xWinner = function() {
        if((gameArray[0][0] && gameArray[0][1] && gameArray[0][2] === X) ||
           (gameArray[1][0] && gameArray[1][1] && gameArray[1][2] === X) ||
           (gameArray[2][0] && gameArray[2][1] && gameArray[2][2] === X) || 
           (gameArray[0][0] && gameArray[1][0] && gameArray[2][0] === X) || 
           (gameArray[0][1] && gameArray[1][1] && gameArray[2][1] === X) || 
           (gameArray[0][2] && gameArray[1][2] && gameArray[2][2] === X) || 
           (gameArray[0][0] && gameArray[1][1] && gameArray[2][2] === X) || 
           (gameArray[0][2] && gameArray[1][1] && gameArray[2][0] === X)) {
                alert("X's for the WIN!!!")
           } else {
            return
        }
    }

    let currentPlayer = 'X';

    const playGame = function(event) {   
        //update the array to signify which player has played which cell  
        if (gameArray[event.target.id[0]][event.target.id[1]] !== null) {
            return
        }
        else if(gameArray[event.target.id[0]][event.target.id[1]] === null) {
            gameArray[event.target.id[0]][event.target.id[1]] = (currentPlayer);
        }
        console.log(gameArray);

        //draw the X or O in the cell based on who's turn it is 
        if (currentPlayer === 'X') {
            event.target.classList.add('x-img');
        } else {
            event.target.classList.add('o-img');
        }

        //check array for winning configuration

        //switch which player is the current player 
        console.log(currentPlayer)
        if(currentPlayer === 'X') {
            currentPlayer = 'O';
        } else if (currentPlayer === 'O') {
            currentPlayer = 'X';
        }
    };

       //listen to clicks on each game cell
    gameCell.forEach(cell => {
         cell.addEventListener('click', playGame);
    })

})();

  