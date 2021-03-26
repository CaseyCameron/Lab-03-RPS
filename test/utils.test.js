// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from '../utils.js';

const test = QUnit.test;

test('This tests whether getRandomThrow is returning values', (expect) => {

    const rpsArray = ['rock', 'paper', 'scissors'];

    let actual = getRandomThrow();
    const includes1 = rpsArray.includes(actual); //includes looks in the rpsArray and asks, hey does it include the actual value

    //one of these will be true, and two will be false
    expect.equal(includes1, true, 'it should store one of the values in rpsArray, then compare it with the results from the call in actual delivering a true result');

});

const test2 = QUnit.test;

test2('This tests whether didUserWin accepts the user and computer choices and returns a win, loss, or draw', (expect) => {
    
    const expectedDraw = 'draw';
    const expectedLoss = 'loss';
    const expectedWin = 'win';
    
    const actualWin = didUserWin('rock', 'scissors');
    const actualDraw = didUserWin('rock', 'rock');
    const actualLoss = didUserWin('rock', 'paper');

    expect.equal(actualWin, expectedWin, 'User rock should break computer scissors creating win');
    expect.equal(actualDraw, expectedDraw, 'two rocks should be true');
    expect.equal(actualLoss, expectedLoss, 'computer paper covers user rocks creating loss');
});