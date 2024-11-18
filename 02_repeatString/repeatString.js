const repeatString = function(string, num) {

    isNegative = num < 0;
    isNotNumber = isNaN(num)
    if (isNegative || isNotNumber) {
        return 'ERROR';
    }

    let repeatedString = '';
    for (let i = 0; i < num; i++) {
        repeatedString = repeatedString.concat(string);
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
