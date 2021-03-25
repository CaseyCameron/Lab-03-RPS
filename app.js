import { getRandomThrow } from './utils.js';

const userChoiceEl = document.getElementById('user-choice-div');
let computerChoiceEl = document.getElementById('computer-choice-div');
const userImageEl = document.getElementById('user-choice-image');
const computerImageEl = document.getElementById('computer-choice-image');
const winsEl = document.getElementById('wins-div');
const lossesEl = document.getElementById('losses-div');
const drawsEl = document.getElementById('draws-div');
const throwButton = document.getElementById('throw-button-div');
const resetButton = document.getElementById('reset-button-div');

throwButton.addEventListener('click', () => {
    // make computer choose rock, paper, or scissors
     let computerChoice = getRandomThrow();
    // next, grab the user choice from the radio buttons
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    let userChoice = selectedChoice.value;

    // calculate if user won with a function

    //update DOM
    // computerChoiceEl.textContent


});