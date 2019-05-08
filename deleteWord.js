function deleteWord(word, words) {
    const indexInWords = words.findIndex(item => {
        return item === word;
    });
    words.splice(indexInWords, 1);
}

module.exports = deleteWord;