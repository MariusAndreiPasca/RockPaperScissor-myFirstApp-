/* global declarations*/
const rockBtn = document.getElementById('✊')
const paperBtn = document.getElementById('🖐')
const scissorBtn = document.getElementById('✌')
const compPick = document.getElementById('compPick')
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')
const endGame = document.getElementById('endGame')
const scoreboard = document.getElementById('scoreboard')
let playerPick = [];
let myChoices = ['✊', '🖐', '✌'];
var pScore = 0
var cScore = 0

/* comp hand */
const compChoice = () => {
    let finalHand = [];
    let choices = ['✊', '🖐', '✌'];
    let randomChoice = Math.floor(Math.random() * 3);
    finalHand.push(choices[randomChoice]);
    compPick.textContent = `${choices[randomChoice]}`;
    return finalHand;
}
/* player hand */
rockBtn.addEventListener("click", () => {
    playerPick.push(myChoices[0]);
    paperBtn.classList.add("disabled");
    scissorBtn.classList.add("disabled");
    rockBtn.classList.remove("disabled");
    gameStarts();
    whoWins();
    updateScore();
    playerPick = [];
    bestOfFive();
    updateScore()
});

paperBtn.addEventListener("click", () => {
    playerPick.push(myChoices[1]);
    rockBtn.classList.add("disabled");
    scissorBtn.classList.add("disabled");
    paperBtn.classList.remove("disabled");
    gameStarts();
    whoWins();
    updateScore();
    playerPick = [];
    bestOfFive();
    updateScore()
});

scissorBtn.addEventListener("click", () => {
    playerPick.push(myChoices[2]);
    rockBtn.classList.add("disabled");
    paperBtn.classList.add("disabled");
    scissorBtn.classList.remove("disabled");
    gameStarts();
    whoWins();
    updateScore();
    playerPick = [];
    bestOfFive();
    updateScore()
});
/* game function */
  function gameStarts() {
    const playerHandPick = playerPick;
    const compHandPick = compChoice();

  }

/* Who Wins? */

function whoWins(playerHandPick, compHandPick) {
    
    switch (playerPick + compChoice()) {
        case '✊✌':
        case '✌🖐':
        case '🖐✊':
        pScore++;
        break;
        case '🖐✌':
        case '✌✊':
        case '✊🖐':
        cScore++
        break;
        case '✊✊':
        case '🖐🖐':
        case '✌✌':
            
        break;
    }
}

/* update score */

function updateScore() {
    playerScore.innerHTML = pScore;
    compScore.innerHTML = cScore;
}

/* score reset after best of 5 */

function bestOfFive() {
    if (pScore === 5) {
     const restart = confirm("You won the best of 5 match!")
function restartBtn () {
    if (restart === true) {
       pScore = 0;
       cScore = 0
    } 
}
        
    } else if (cScore === 5) {
     const restart = confirm("You lost the best of 5 match!")
        function restartBtn () {
            if (restart === true) {
                pScore = 0;
                cScore = 0
            }
            
        }
        restartBtn () 
        
    } else {
        console.log("Go on!")
    }
} 