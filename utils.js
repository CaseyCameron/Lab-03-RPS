export function getRandomThrow(){
    const rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

export function didUserWin(userChoice, computerChoice){
    if (userChoice === 'rock' && computerChoice === 'rock')
        return 'draw';
    if (userChoice === 'rock' && computerChoice === 'paper')
        return 'loss';
    if (userChoice === 'rock' && computerChoice === 'scissors')
        return 'win';

    if (userChoice === 'paper' && computerChoice === 'paper')
        return 'draw';
    if (userChoice === 'paper' && computerChoice === 'scissors')
        return 'loss';
    if (userChoice === 'paper' && computerChoice === 'rock')
        return 'win';

    if (userChoice === 'scissors' && computerChoice === 'scissors')
        return 'draw';
    if (userChoice === 'scissors' && computerChoice === 'rock')
        return 'loss';
    if (userChoice === 'scissors' && computerChoice === 'paper')
        return 'win';
    else return 'error';
}
