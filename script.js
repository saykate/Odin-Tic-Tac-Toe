//listen for X or O button - have something pop up for their name (modal?)
//add logic requiring name and then capitalize it
//have text that say's 'it's ${player1}'s turn' for the X and player2 is O
//listen for click in cell (make sure it's empty)
//change display-none to display-block for X or O class based on which button is clicked
//this pushes into an array?
//add in logic for what patterns win and then check the array for those patterns? - I saw this in some other projects



const gameBoard = (() => {
    //listen for click in a cell
    const cells = document.querySelectorAll('.game-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', addMark);
    })
    
})();