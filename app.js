import { getRandomThrow, didUserWin } from './utils.js';

const userChoiceEl = document.getElementById('user-choice-div');
let computerChoiceEl = document.getElementById('computer-choice-div');
const userImageEl = document.getElementById('user-choice-image');
const computerImageEl = document.getElementById('computer-choice-image');
const resultsEL = document.getElementById('results-div');
const winsEl = document.getElementById('wins-div');
const lossesEl = document.getElementById('losses-div');
const drawsEl = document.getElementById('draws-div');
const throwButton = document.getElementById('throw-button-div');
const resetButton = document.getElementById('reset-button-div');

let gameTally = {
    wins: 0,
    losses: 0,
    draws: 0,
};

throwButton.addEventListener('click', () => {
    //reset resultsEl.textContent to default value

    // make computer choose rock, paper, or scissors
    let computerChoice = getRandomThrow();
    // next, grab the user choice from the radio buttons
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    let userChoice = selectedChoice.value;

    // calculate if user won with a function, 
    let result = didUserWin(userChoice, computerChoice);

    //update DOM with result using an if statement
    userChoiceEl.textContent = selectedChoice.value;
    computerChoiceEl.textContent = computerChoice;

    if (result === 'win'){
        resultsEL.textContent = 'You win!';
        winsEl.textContent = 'Wins: ' + gameTally.wins++;
    }
    if (result === 'draw'){
        resultsEL.textContent = "It's a draw.";
        drawsEl.textContent = 'Draws: ' + gameTally.draws++; 
    }
    if (result === 'loss'){
        resultsEL.textContent = 'You lose.';
        lossesEl.textContent = 'Losses: ' + gameTally.losses++;
    }
});