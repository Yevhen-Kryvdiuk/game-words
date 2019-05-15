const foundWord = require('./foundWord');
const deleteWord = require('./deleteWord');
const verificationWord = require('./verificationWord');
const nouns = require('./words');
const readline = require('readline');

let startMessage = `Hello, let\'s play, say the word to me!
  To close the game to write close-game`;
const warningMessage = 'Wrong word, try again';
const CLOSE_GAME = 'close-game';
let userWord = '';
let computerWord = '';

function questionGame(message) {
    rl.question(`${message}\n`,(answer) => {
        userWord = answer.toLowerCase();
        if (userWord === CLOSE_GAME) {
            rl.close();
        } else {
            if (!verificationWord(userWord, nouns)) {
                computerWord = warningMessage;
                questionGame(computerWord);
            } else {
                deleteWord(userWord, nouns);
                computerWord = foundWord(userWord, nouns);
                questionGame(computerWord);
                if (computerWord === 'You win!') {
                    rl.close();
                }
            }
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();
rl.on('close', () => {
    console.log('You close game.');
});
questionGame(startMessage);
