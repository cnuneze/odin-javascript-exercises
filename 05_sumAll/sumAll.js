const sumAll = function(firstNumber, secondNumber) {

    if (
        !Number.isInteger(firstNumber) ||
        !Number.isInteger(secondNumber) ||
        firstNumber < 0 ||
        secondNumber < 0
    ) {
        return 'ERROR';
    }
    let switchValues = firstNumber > secondNumber;
    let minorNumber = (switchValues) ? secondNumber : firstNumber;
    let higherNumber = (switchValues) ? firstNumber : secondNumber;

    let total = 0;
    for (let i = minorNumber; i <= higherNumber; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
