const foundWord = (userWord, allWords) =>  {
    let lastLetterPosition = userWord.length -1;
    let searchWord = '';
    while (lastLetterPosition !== -1 && !searchWord) {
        searchWord = allWords.find(word => {
            return word[0] === userWord[lastLetterPosition];
        });
        lastLetterPosition--;
    }
    return searchWord || 'You win!';
};

module.exports = foundWord;