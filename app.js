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
    computerChoiceEl.textContent = getRandomThrow();
});