const palindromes = function (word) {
    let cleanWord = word.replace(/[^a-z0-9]/gi, '').toUpperCase();
    const arrayWord = Array.from(cleanWord);
    let palindrome = arrayWord.reduceRight((finalWord, character) => {
        finalWord += character;
        return finalWord;
    }, '');

    return palindrome === cleanWord;
};

// Do not edit below this line
module.exports = palindromes;
