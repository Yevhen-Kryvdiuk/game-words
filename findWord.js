function findWord(userWord, allWords) {
    let lastLetterPosition = userWord.length - 1;
    while (lastLetterPosition !== -1) {
        let searchWord = allWords.find(word => {
            return word[0] === userWord[lastLetterPosition];
        });
        if (searchWord) {
            return searchWord;
        }
        lastLetterPosition--;
    }
    return false;
}

module.exports = findWord;