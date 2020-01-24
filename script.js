// HTML Elements declarations
const rollButton = document.getElementById("rollButton");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const gameMessage = document.getElementById("gameMessage");
const restartButton = document.getElementById("restartButton");
const timesWon = document.getElementById("timesWon");
const timesLost = document.getElementById("timesLost");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
// consts go here

// restartButton.style.visibility = "hidden" // if you don't want button visible
diceImage.style.visibility = "hidden";
gameMessage.textContent = "Game over. You lose.";
gameMessage.style.visibility = "hidden";

let numberRolled;
let pointsScored = 0;

let numOfWins = [];
let numOfLoses = [];
let numOf1 = [];
let numOf2 = [];
let numOf3 = [];
let numOf4 = [];
let numOf5 = [];
let numOf6 = [];


// function declaration

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6);
    // console.log(`Roll ceil variable ${numberRolled}`);
    gameMessage.style.visibility = "visible"
}

const winOrLose = () => {
    if(numberRolled == 1) {
        gameMessage.textContent = "Game over. You lose.";
        rollButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible"
        // num of loses
        numOfLoses.push(1);
        console.log(numOfLoses);
        // console.log(`Number of times lost: ${numOfLoses.length}`)
        timesLost.textContent = numOfLoses.length;
    } else if(pointsScored > 20) {
        gameMessage.textContent = "You win. Well Done.";
        rollButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible"
        //num of wins
        numOfWins.push(1);
        console.log(numOfWins)
        // console.log(`Number of times won: ${numOfWins.length}`)
        timesWon.textContent = numOfWins.length;
    } else {
        gameMessage.textContent = "Roll again";
    }
}

const countDicerolls = () => {
    if(numberRolled == 1) {
        numOf1.push(1);
        // console.log(numOfLoses);
        // console.log(`Number of times lost: ${numOfLoses.length}`)
        dice1.textContent = numOf1.length;
    } else if(numberRolled == 2) {
        numOf2.push(2);
        console.log(numOf2)
        dice2.textContent = numOf2.length;
    } else if(numberRolled == 3){
        numOf3.push(3);
        dice3.textContent = numOf3.length;
    } else if(numberRolled == 4){
        numOf4.push(4);
        dice4.textContent = numOf4.length;
    } else if(numberRolled == 5){
        numOf5.push(5);
        dice5.textContent = numOf5.length;
    } else if(numberRolled == 6){
        numOf6.push(6);
        dice6.textContent = numOf6.length;
    }
}


rollButton.addEventListener("click", () =>{
    diceRoll();
    totalScore.textContent = (pointsScored += numberRolled);
    winOrLose();
    countDicerolls();
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
})

const resetStats = () =>{
    totalScore.textContent = 0;
    pointsScored = 0;
    rollButton.style.visibility = "visible"; 
    // restartButton.style.visibility = "hidden"; // If don't want buttons visible
    diceImage.style.visibility = "hidden";
    gameMessage.style.visibility = "hidden"
}



restartButton.addEventListener("click", () =>{
    resetStats();
})
