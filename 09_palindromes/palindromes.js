const palindromes = function (word) {
    const arrayWord = Array.from(word);
    let palindrome = arrayWord.reduceRight((finalWord, character) => {
        finalWord += character;
        return finalWord;
    }, '');

    return palindrome === word;
};

// Do not edit below this line
module.exports = palindromes;
