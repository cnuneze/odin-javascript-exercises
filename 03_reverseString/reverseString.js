const reverseString = function(string) {
    
    let stringLastIndex = string.length - 1;
    let reversedString = '';

    for (let i = stringLastIndex; i >= 0 ; i--) {
        reversedString = reversedString.concat(string[i]);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
