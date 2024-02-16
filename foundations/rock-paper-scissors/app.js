'use strict'

// Game Controls
let userChoice;
let computerChoice;
let numberOfRounds = 0;
let userScore = 0;
let computerScore = 0;
const  endRound = 5;

// DOM variables
const gameOptions = document.querySelector("#game-controls");
const pickedChoices = document.querySelector("#picked-choices");
const scores = document.querySelector("#scores");
const finalResult = document.querySelector("#final-result");

//  Main function to start the game
function playGame() {
    // Check for game over after 5 rounds (endRound)
    if (numberOfRounds >= endRound) {
        printEndResult(userScore, computerScore);
        playAgain();
        return;
    }
    updateScores();
    updateResults();
    numberOfRounds += 1;
}

// Getting the computer choice
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3) 
    computerChoice = options[randomIndex]
}

// Play one round and return the result
function PlayRound(userChoice, computerChoice) {
    let result;
    if (userChoice === computerChoice) {
        result = 'Tie'
    } else if (
        userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'paper' && computerChoice === 'rock'
        || userChoice === 'scissors' && computerChoice === 'paper') {
            result = 'You Won'
    } else {
        result = 'You Lost'
    }
    return result;
}

function updateScores() {
    let gameResult = PlayRound( userChoice, computerChoice );
    if (gameResult === 'You Won') {
        userScore += 1;
    } else if (gameResult === 'You Lost') {
        computerScore += 1;
    } else {
        userScore += 1;
        computerScore += 1;
    }
}

// Print the game end result in DOM
function printEndResult(userScore, computerScore) {
    if (userScore > computerScore) {
        finalResult.textContent = `You Won`;
    } else if (userScore < computerScore) {
        finalResult.textContent = `You Lost`;
    } else {
        finalResult.textContent = `Tie`;
    }
}

// Update results in DOM
function updateResults() {
    pickedChoices.textContent = `Your choice: ${userChoice} | Computer choice: ${computerChoice}`;
    scores.textContent = `user score: ${userScore} | computer score: ${computerScore}`;
}




// DOM Event Listeners

gameOptions.addEventListener("click", (e) => {  
    // Checking that user clicked a button
    if (e.target.name) {
        userChoice = e.target.name;
        getComputerChoice();
    } else {
        return;
    }
    
    playGame()
})

// creating a button to play again and resetting all scores and rounds
function playAgain() {
    const playAgainButton = document.createElement('button');
    playAgainButton.id = 'play-again';
    playAgainButton.textContent = 'play again';

    if ([...gameOptions.children].length <= 3) gameOptions.appendChild(playAgainButton)
    
    playAgainButton.addEventListener('click', (e) => {
        e.stopPropagation();
        numberOfRounds = 0;
        userScore = 0;
        computerScore = 0;
        pickedChoices.textContent = '';
        scores.textContent = '';
        finalResult.textContent = '';
        gameOptions.removeChild(playAgainButton)
    })
}


