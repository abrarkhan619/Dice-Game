// const rollButton = document.getElementById("roll")

// rollButton.addEventListener("click", () =>{
    
//     function rollDice() {
//         return Math.ceil(Math.random() * 6)
//     }
//     console.log(rollDice());
// })

////////////////////////////////

// HTML Elements declarations
const rollButton = document.getElementById("roll");
const playerScore = document.getElementById("playerScore");
const diceImage = document.getElementById("diceImage");
const totalScore = document.getElementById("totalScore");
// consts go here

diceImage.style.visibility = "hidden";

let numberRolled;
let pointsScored = 0;

// function declaration

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6)
    console.log(`Roll ceil variable ${numberRolled}`)
}

const winOrLose = () => {
    if(numberRolled == 1) {
        console.log("You lost")
        pointsScored = 0;
    } else if(pointsScored >= 20) {
        console.log("You win")
        pointsScored = 0;
    } else {
        console.log("carry on")
    }

    scoreAddition()
}

const scoreAddition = () => {
    diceDoll()
    pointsScored += numberRolled;
    console.log(`My total score ${pointsScored}`);
}

rollButton.addEventListener("click", () =>{

    diceRoll()
    playerScore.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`    

})

// winOrLose()
// winOrLose()
// winOrLose()





// winOrLose();

