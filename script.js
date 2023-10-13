//why would the Players need an object?
//add a check for the Tie
//figure out win glitch
let playerX = '';
let playerO = '';
const overlay = document.querySelector('.overlay');

const playerInfo = (() => {
    const xModal = document.querySelector('.x-modal');
    const oModal = document.querySelector('.o-modal');
    const startButton = document.querySelector('.start-button');
    const submits = document.querySelectorAll('.submit');

    const openModal = function (event) {
            xModal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }

    const closeModal = function (event) {
        if(event.target.classList.contains('x-submit')) {
            const xInput = document.getElementById('x-name-modal');
            playerX = xInput.value;

            if(playerX.trim() === '') {
                return alert('Please enter a name for player X')
            }

            xModal.classList.add('hidden');
            oModal.classList.remove('hidden');

        } else if(event.target.classList.contains('o-submit')) {
            const oInput = document.getElementById('o-name-modal');
            playerO = oInput.value;

            if(playerO.trim() === '') {
                return alert('Please enter a name for player O')
            }

            oModal.classList.add('hidden');
            overlay.classList.add('hidden');
            gameBoard();
        }
    }

    startButton.addEventListener('click', openModal);
    submits.forEach(submit => {
        submit.addEventListener('click', closeModal);
    })
})();

const gameBoard = (() => {
    const gameCell = document.querySelectorAll('.game-cell');
    const winModal = document.querySelector('.win-modal');
    const winnerText = document.querySelector('.winner-text');
    const restart = document.querySelector('.restart-button');

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
                winnerText.textContent = `${currentPlayer === 'X' ? playerX : playerO} is the WINNER!!!`;
                winModal.classList.remove('hidden');
                overlay.classList.remove('hidden');
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

    const restartGame = function() {
        winModal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

       //listen to clicks on each game cell
    gameCell.forEach(cell => {
         cell.addEventListener('click', playGame);
    })
    restart.addEventListener('click', restartGame);

});

  