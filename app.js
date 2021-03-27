import { getRandomThrow, didUserWin } from './utils.js';


const userChoiceEl = document.getElementById('user-choice-div');
const computerChoiceEl = document.getElementById('computer-choice-div');
const userImageEl = document.getElementById('user-image');
const computerImageEl = document.getElementById('computer-image');
const resultsEL = document.getElementById('results-div');
const winsEl = document.getElementById('wins-div');
const lossesEl = document.getElementById('losses-div');
const drawsEl = document.getElementById('draws-div');
const throwButton = document.getElementById('throw-button-div');
const resetButton = document.getElementById('reset-button-div');
const resetTally = document.getElementById('reset-tally-div');
let resetCounter = 1;

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

    // change the user image (refactor later)
    if (selectedChoice.value === 'rock'){
        userImageEl.src = './assets/' + selectedChoice.value + '.png';
    }
    if (selectedChoice.value === 'paper'){
        userImageEl.src = './assets/' + selectedChoice.value + '.png';
    }
    if (selectedChoice.value === 'scissors'){
        userImageEl.src = './assets/' + selectedChoice.value + '.png';
    }

    // change the computer image (refactor later)
    if (computerChoice === 'rock'){
        computerImageEl.src = './assets/' + computerChoice + '.png';
    }
    if (computerChoice === 'paper'){
        computerImageEl.src = './assets/' + computerChoice + '.png';
    }
    if (computerChoice === 'scissors'){
        computerImageEl.src = './assets/' + computerChoice + '.png';
    }

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
    
    resetTally.textContent = 'Reset tally: ' + resetCounter++;

    userImageEl.src = '';
    computerImageEl.src = '';
});
