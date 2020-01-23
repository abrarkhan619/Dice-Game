// const rollButton = document.getElementById("roll")

// rollButton.addEventListener("click", () =>{
    
//     function rollDice() {
//         return Math.ceil(Math.random() * 6)
//     }
//     console.log(rollDice());
// })

////////////////////////////////

// HTML Elements declarations
const rollButton = document.getElementById("rollButton");
// const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
const gameMessage = document.getElementById("gameMessage");
const restartButton = document.getElementById("restartButton");
// consts go here

restartButton.style.visibility = "hidden"
diceImage.style.visibility = "hidden";

let numberRolled;
let pointsScored = 0;

// function declaration

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6);
    console.log(`Roll ceil variable ${numberRolled}`);
    gameMessage.style.visibility = "visible"
}

const winOrLose = () => {
    if(numberRolled == 1) {
        gameMessage.textContent = "Game over. You lose.";
        rollButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible"
    } else if(pointsScored > 20) {
        gameMessage.textContent = "You win. Well Done.";
        rollButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible"
    } else {
        gameMessage.textContent = "Roll again";
    }
}



// const scoreAddition = () => {
//     diceRoll()
//     pointsScored += numberRolled
//     console.log(`My total score ${pointsScored}`);
// }

// scoreAddition()

rollButton.addEventListener("click", () =>{
    diceRoll();
    // playerScore.textContent = numberRolled;
    totalScore.textContent = (pointsScored += numberRolled);
    winOrLose();
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`;
})

const resetStats = () =>{
    totalScore.textContent = 0;
    pointsScored = 0;
    rollButton.style.visibility = "visible";
    restartButton.style.visibility = "hidden";
    diceImage.style.visibility = "hidden";
    gameMessage.style.visibility = "hidden"
}



restartButton.addEventListener("click", () =>{
    resetStats();
})

// winOrLose()
// winOrLose()
// winOrLose()





// winOrLose();

