const repeatString = function(string, num) {

    let isNegative = num < 0;
    let isNotNumber = isNaN(num)
    
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
