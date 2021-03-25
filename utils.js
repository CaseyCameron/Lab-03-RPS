export function getRandomThrow(){
    const rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}