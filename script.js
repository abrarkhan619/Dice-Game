// HTML Elements declarations
const rollButton = document.getElementById("rollButton");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const gameMessage = document.getElementById("gameMessage");
const restartButton = document.getElementById("restartButton");
const timesWon = document.getElementById("timesWon");
const timesLost = document.getElementById("timesLost");
// consts go here

// restartButton.style.visibility = "hidden" // if you don't want button visible
diceImage.style.visibility = "hidden";
gameMessage.textContent = "Game over. You lose.";
gameMessage.style.visibility = "hidden";

let numberRolled;
let pointsScored = 0;

let numOfWins = [];
let numOfLoses = [];

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
        timesLost.textContent = `Number of times lost: ${numOfLoses.length}`;
    } else if(pointsScored > 20) {
        gameMessage.textContent = "You win. Well Done.";
        rollButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible"
        //num of wins
        numOfWins.push(1);
        console.log(numOfWins)
        // console.log(`Number of times won: ${numOfWins.length}`)
        timesWon.textContent = `Number of times won: ${numOfWins.length}`;
    } else {
        gameMessage.textContent = "Roll again";
    }
}


rollButton.addEventListener("click", () =>{
    diceRoll();
    totalScore.textContent = (pointsScored += numberRolled);
    winOrLose();
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
