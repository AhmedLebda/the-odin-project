'use strict'

const numberOfRounds = 5;

// Getting the user Choice
function getUserChoice() {
    let userChoice;
    do {
        userChoice = prompt('Please choose rock, paper or scissors?', 'rock').toLowerCase();
    } while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors')
    return userChoice;
}

// Getting the computer choice
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3) 
    const computerChoice = options[randomIndex]
    return computerChoice;
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
    console.log(`Your choice: ${userChoice} | Computer choice: ${computerChoice}`);
    return result;
}

// Print the game result the the console
function printEndResult(userScore, computerScore) {
    if (userScore > computerScore) {
        console.log(`=====>> You Won <<=====`);
    } else if (userScore < computerScore) {
        console.log(`=====>> You Lost <<=====`);
    } else {
        console.log(`=====>> You Tie <<=====`);
    }
}

// Play n number of games (5) and return the final result
function PlayGame(n) {
        let userScore = 0;
        let computerScore = 0;

    for (let i = 0; i < n; i++) {
        let gameResult = PlayRound( getUserChoice(), getComputerChoice() );
        if (gameResult === 'You Won') {
            userScore += 1;
        } else if (gameResult === 'You Lost') {
            computerScore += 1;
        } else {
            userScore += 1;
            computerScore += 1;
        }
        console.log(`user score: ${userScore} | computer score: ${computerScore}`);
    }

    printEndResult(userScore, computerScore)
}

PlayGame(numberOfRounds)
