const findWord = require('./findWord');
const deleteWord = require('./deleteWord');
const nouns = require('./words');
const readline = require('readline');

let startMessage = `Hello, let\'s play, say the word to me!
  To close the game to write close-game`;
const warningMessage = 'Wrong word, try again';
const CLOSE_GAME = 'close-game';
let userWord = '';
let computerWord = '';

function questionGame(message) {
    rl.question(`${message}\n`, (answer) => {
        userWord = answer.toLowerCase().trim();
        if (userWord === CLOSE_GAME) {
            rl.close();
        } else {
            if (nouns.includes(userWord)) {
                deleteWord(userWord, nouns);
                computerWord = findWord(userWord, nouns);
                deleteWord(computerWord, nouns);
                if (!computerWord) {
                    console.log('You win!');
                    rl.close();
                }
                questionGame(computerWord);
            } else {
                questionGame(warningMessage);
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
