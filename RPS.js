/* global declarations*/
const rockBtn = document.getElementById('✊')
const paperBtn = document.getElementById('🖐')
const scissorBtn = document.getElementById('✌')
const compPick = document.getElementById('compPick')
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')
let playerPick = [];
let myChoices = ['✊', '🖐', '✌'];


function compChoice() {
    let choices = ['✊', '🖐', '✌'];
    let randomChoice = Math.floor(Math.random() * 3);
    compPick.textContent = `${choices[randomChoice]}`;
}

rockBtn.addEventListener("click", () => {
    playerPick.push(myChoices[0]);
    paperBtn.classList.add("disabled");
    scissorBtn.classList.add("disabled");
    rockBtn.classList.remove("disabled");
    compChoice();
    console.log(playerPick);
    playerPick = [];
    
});

paperBtn.addEventListener("click", () => {
    playerPick.push(myChoices[1]);
    rockBtn.classList.add("disabled");
    scissorBtn.classList.add("disabled");
    paperBtn.classList.remove("disabled");
    compChoice();
    console.log(playerPick);
    playerPick = [];
})

scissorBtn.addEventListener("click", () => {
    playerPick.push(myChoices[2]);
    rockBtn.classList.add("disabled");
    paperBtn.classList.add("disabled");
    scissorBtn.classList.remove("disabled");
    compChoice();
    console.log(playerPick);
    playerPick = [];
})
/* game function */


/* Who Wins? */

function whoWins(playerPick, compPick) {
    if (playerPick === compPick) {
        return "It's a draw!" 
    }
    if (playerPick === '✊')  {
        if (compPick === '🖐') {
            console.log("Lose!")
        } else {
            console.log("Win!")
        }
    };
    if (playerPick === '🖐')  {
        if (compPick === '✌') {
            console.log("Lose!")
        } else {
            console.log("Win!")
        }
    };
    if (playerPick === '✌')  {
        if (compPick === '✊') {
            console.log("Lose!")
        } else {
            console.log("Win!")
        }
    };    

}; 



