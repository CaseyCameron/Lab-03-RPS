import { getRandomThrow, didUserWin } from './utils.js';

const userChoiceEl = document.getElementById('user-choice-div');
const computerChoiceEl = document.getElementById('computer-choice-div');
const userImageEl = document.getElementById('user-choice-image');
const computerImageEl = document.getElementById('computer-choice-image');
const resultsEL = document.getElementById('results-div');
const winsEl = document.getElementById('wins-div');
const lossesEl = document.getElementById('losses-div');
const drawsEl = document.getElementById('draws-div');
const throwButton = document.getElementById('throw-button-div');
const resetButton = document.getElementById('reset-button-div');

let gameTally = {
    wins: 1,
    losses: 1,
    draws: 1,
};

throwButton.addEventListener('click', () => {
    let computerChoice = getRandomThrow();
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    let userChoice = selectedChoice.value;

    let result = didUserWin(userChoice, computerChoice);

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

resetButton.addEventListener('click', () => {
    //reset gameTally, user choice div, comp choice div, user choice img, comp choice img, results div
    gameTally = {
        wins: 1,
        losses: 1,
        draws: 1,
    };

    userChoiceEl.textContent = 'User Choice';
    computerChoiceEl.textContent = 'Computer Choice';
    userImageEl.textContent = '';
    computerImageEl.textContent = '';
    resultsEL.textContent = 'Results';
    winsEl.textContent = 'Wins: 0';
    lossesEl.textContent = 'Losses: 0';
    drawsEl.textContent = 'Draws: 0';
    //reset radio button to rock
});