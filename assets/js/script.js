const board = document.querySelector('#game-board');
const cubes = document.querySelectorAll('#game-board .cell');

//Start of game
gameStart();

function gameStart(){
    board.classList.remove('turn-x', 'turn-o');

    for(let cell of cubes){
        cell.classList.remove('x', 'o');
        cell.addEventListener('click', selection {once: true});
    }
    currentPlayer = math.round(0,1) === 1 ? 'x' , 'o';
    board.classList.add('turn-' + currentPlayer);
};

function selection(){
    this.classList.add(currentPlayer);
}

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function buttonClick(){
    this.classList.add(playerSwitch);

    playerSwitch = playerSwitch == 'x' ? '0': 'x';
    board.classList.remove('turn-o', 'turn-x');
    board.classList.add('turn-o', + playerSwitch);
}

function decideResult(){
    return winningPatterns.some(winningPatterns => {
           return winningPatterns.every(w => {
               if(cubes[w].classList.contains(currentPlayer)) {
                   return true;
               }

               return false;
           })
    });
}

//game start
//player selection x,o
//add selection
//switch player
//decide result
//Rematch option