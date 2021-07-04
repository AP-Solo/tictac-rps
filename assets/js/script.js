//html elements

let cells = document.getElementsByClassName('cells');
let board = []
let rematch = document.getElementById('rematch');
let gameStatus = document.getElementById('');

// Game variables 

let gameStart = true
let playerChange = true

// Event Listeners
cells.addEventListener('click', pickBoxes);
rematch.addEventListener('click', reMatch);

// event handlers
function startgame(){

}

function pickBoxes(event){
    for(let cubes of cells){
       
    }
}

function gameStatus(event){
// win, lose or draw
}

function reMatch(event){
// rematch (reset the game)
}

function playerTurns(){
    
}
function winningCombinations(){
// create an array
}