//start button to start game, X goes first
//it will say "X's - it's your turn" 

//write score checker

//what needs to be in which object?
//why would the Players need an object?



const game = (() => {
    const gameCell = document.querySelectorAll('.game-cell');

    const gameArray = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];

    let currentPlayer = 'X';

    const gamePlay = function(event) {   
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
        cell.addEventListener('click', gamePlay);
    })

})();

