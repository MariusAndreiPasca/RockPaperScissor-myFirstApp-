/* global declarations*/
const rockBtn = document.getElementById('✊')
const paperBtn = document.getElementById('✋')
const scissorBtn = document.getElementById('✌️')
const compPick = document.getElementById('compPick')
const playerScore = document.getElementById('playerScore')
const compScore = document.getElementById('compScore')
const endGame = document.getElementById('endGame')
const scoreboard = document.getElementById('scoreboard')
const popup = document.getElementById('popup')
const restartGame = document.getElementById('restartGame')
const messagePlayer = document.getElementById('popup_player')
const messageComp = document.getElementById('popup_comp')
const popupSure = document.getElementById('popup_sure')
const overlay = document.getElementById('overlay')
const toggle = document.getElementById('toggle')
const unfair = document.getElementById('unfair')
const unfairMode = document.getElementById('unfairMode')
const gameScreen = document.getElementById('gameScreen')
const danger = document.getElementById('danger')

let playerPick = [];
let myChoices = ['✊', '✋', '✌️'];
let pScore = 0
let cScore = 0

/* comp hand */
let compChoice = () => {
    let finalHand = [];
    let choices = ['✊', '✋', '✌️'];
    if (unfair.checked == false) {
    let randomChoice = Math.floor(Math.random() * 3);
    finalHand.push(choices[randomChoice]);
    compPick.textContent = `${choices[randomChoice]}`;
    return finalHand;
    } else {
        if (playerPick == '✊') {
    finalHand.push(choices[1]);
    compPick.textContent = `${choices[1]}`
    return finalHand;       
        } else if (playerPick == '✋') {
    finalHand.push(choices[2]);
    compPick.textContent = `${choices[2]}`
    return finalHand;
        } else {
    finalHand.push(choices[0]);
    compPick.textContent = `${choices[0]}`
    return finalHand;
        }  
    }    
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

    let playerHandPick = playerPick;
    let compHandPick = compChoice();
    
  }

console.log(unfair.value)

/* Who Wins? */

function whoWins(playerHandPick, compHandPick) {
    
    switch (playerPick + compChoice()) {
        case '✊✌️':
        case '✌️✋':
        case '✋✊':
        pScore++;
        break;
        case '✋✌️':
        case '✌️✊':
        case '✊✋':
        cScore++;
        break;
        case '✊✊':
        case '✋✋':
        case '✌️✌️':
            
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
    
    
 if(pScore === 5) {
    popup.style.display = 'block'
    messageComp.style.display = 'none'
    overlay.style.display = 'block'
    unfairMode.style.display = 'none'
    popupSure.style.display = 'none'
    restartGame.style.display = 'block'

    restartGame.addEventListener("click", () => {
        popup.style.display = 'none'
        messageComp.style.display = 'block'
        overlay.style.display = 'none'
        pScore = 0
        cScore = 0
        updateScore()
    })
 } else if (cScore === 5) {
    popup.style.display = 'block'
    messagePlayer.style.display = 'none'
    overlay.style.display = 'block'
    unfairMode.style.display = 'none'
    popupSure.style.display = 'none'
    restartGame.style.display = 'block'
    messageComp.style.display = 'block'

    restartGame.addEventListener("click", () => {
        popup.style.display = 'none'
        messagePlayer.style.display = 'block' 
        overlay.style.display = 'none' 
        pScore = 0
        cScore = 0
        updateScore()
    })
 }
} 

// unfair game mode


unfair.addEventListener("click", () => {
    if(unfair.checked == true) {
        popup.style.display = 'block'
        overlay.style.display = 'block'
        messageComp.style.display = 'none'
        messagePlayer.style.display = 'none'
        restartGame.style.display = 'none'
        popupSure.style.display = 'block'
        unfairMode.style.display = 'block'
    } else {
        gameScreen.style.background = 'white'
        danger.style.display = 'none'
        
    };

    unfairMode.addEventListener("click", () => {
        popup.style.display = 'none'
        messagePlayer.style.display = 'block' 
        overlay.style.display = 'none'
        gameScreen.style.background = 'red'
        danger.style.display = 'block'
        pScore = 0
        cScore = 0
        updateScore()
    })
})


