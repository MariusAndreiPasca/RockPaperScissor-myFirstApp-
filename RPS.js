/* global declarations*/
const rockBtn = document.getElementById('✊')
const paperBtn = document.getElementById('🖐')
const scissorBtn = document.getElementById('✌')
const compPick = document.getElementById('compPick')
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')
let playerPick = [];
let myChoices = ['✊', '🖐', '✌'];


const compChoice = () => {
    let finalHand = [];
    let choices = ['✊', '🖐', '✌'];
    let randomChoice = Math.floor(Math.random() * 3);
    finalHand.push(choices[randomChoice]);
    compPick.textContent = `${choices[randomChoice]}`;
    return finalHand;
}

rockBtn.addEventListener("click", () => {
    playerPick.push(myChoices[0]);
    paperBtn.classList.add("disabled");
    scissorBtn.classList.add("disabled");
    rockBtn.classList.remove("disabled");
    gameStarts();
    whoWins();
    playerPick = [];
    
});

paperBtn.addEventListener("click", () => {
    playerPick.push(myChoices[1]);
    rockBtn.classList.add("disabled");
    scissorBtn.classList.add("disabled");
    paperBtn.classList.remove("disabled");
    gameStarts();
    whoWins();
    playerPick = [];
})

scissorBtn.addEventListener("click", () => {
    playerPick.push(myChoices[2]);
    rockBtn.classList.add("disabled");
    paperBtn.classList.add("disabled");
    scissorBtn.classList.remove("disabled");
    gameStarts();
    whoWins();
    playerPick = [];
})
/* game function */
  function gameStarts() {
    const playerHandPick = playerPick;
    const compHandPick = compChoice();
    console.log("You picked: " + playerHandPick);
    console.log("Comp picked: " + compHandPick);
  }

/* Who Wins? */

function whoWins(playerHandPick, compHandPick) {
    if (playerHandPick === compHandPick) {
        return "It's a draw!" 
    }
    if (playerHandPick === '✊')  {
        if (compHandPick === '🖐') {
            console.log("Lose!")
        } else {
            console.log("Win!")
        }
    };
    if (playerHandPick === '🖐')  {
        if (compHandPick === '✌') {
            console.log("Lose!")
        } else {
            console.log("Win!")
        }
    };
    if (playerHandPick === '✌')  {
        if (compHandPick === '✊') {
            console.log("Lose!")
        } else {
            console.log("Win!")
        }
    };    

}; 



