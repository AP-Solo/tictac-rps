const circle = "O";
const cross = "x";
const boxes = document.getElementsByClassName('class');
for(i=0; i < boxes.length; i++){
    boxes.addEventListner('click', buttonClick);
    
}


// Game status
const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function result(){
    if (winningPatterns){
        console.log("Winner");}
        else{
            console.log("Tie Game")
        };
}
function buttonClick(event){
    console.log(circle);
}



//game start
//player selection x,o
//add selection
//switch player
//decide result
//Rematch option

function gameStart(){}
function playerSelect(){}
function playerSwitch(){}
function decideResult(){}
function rematch(){}