const rollButton = document.getElementById("roll")
const score = document.getElementById("score")
const rolled = document.getElementById("rolled")
let numberRolled;
let pointsScored = 0;

// rollButton.addEventListener("click", () =>{
    
//     function rollDice() {
//         return Math.ceil(Math.random() * 6)
//     }
//     console.log(rollDice());
// })

const rollTheDice = () =>{
    numberRolled = Math.ceil(Math.random() * 6)
    rolled.textContent = numberRolled
    // console.log(`Roll ceil variable ${rollCeil}`)
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
    // rollTheDice()
    pointsScored += numberRolled;
    // console.log(`My total score ${pointsScored}`);
    score.textContent = pointsScored;
}


rollButton.addEventListener("click", () =>{
    
    rollTheDice();
    scoreAddition();

    // function rollDice() {
    //     return Math.ceil(Math.random() * 6)
    // }
    // console.log(rollDice());
})


/////////////////////////////

// let rollCeil;
// let pointsScored = 0;

// const diceDoll = () => {
//     rollCeil = Math.ceil(Math.random() * 6)
//     console.log(`Roll ceil variable ${rollCeil}`)
// }

// const winOrLose = () => {
//     if(rollCeil == 1) {
//         console.log("You lost")
//         pointsScored = 0;
//     } else if(pointsScored >= 20) {
//         console.log("You win")
//         pointsScored = 0;
//     } else {
//         console.log("carry on")
//     }

//     scoreAddition()
// }

// const scoreAddition = () => {
//     diceDoll()
//     pointsScored += rollCeil;
//     console.log(`My total score ${pointsScored}`);
// }

winOrLose()
winOrLose()
winOrLose()