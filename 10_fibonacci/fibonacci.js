const fibonacci = function(number) {
    const sequence = [];
    number = parseInt(number);
    if (number === 0) {
        return 0;
    }

    if (number < 0){
        return "OOPS";
    }
    for (let i = 0; i < number; i++) {
        let previousNumber = sequence[i-2] ? sequence[i-2] : 0;
        let currentNumber = sequence[i-1] ? sequence[i-1] : 1;
        
        let nextNumber = previousNumber + currentNumber;
        sequence.push(nextNumber);
    }

    return sequence.pop();

};

// Do not edit below this line
module.exports = fibonacci;
