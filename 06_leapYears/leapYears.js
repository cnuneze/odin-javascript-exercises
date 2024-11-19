const leapYears = function(year) {

    if (!Number.isInteger(year)) {
        return 'ERROR';
    }

    let isDivisibleBy4 = (year % 4 === 0);
    let isDivisibleBy100 = (year % 100 === 0);
    let isDivisibleBy400 = (year % 400 === 0);

    if (isDivisibleBy4) {
        if (isDivisibleBy100) {
            if (isDivisibleBy400) {
                return true;
            }
            return false;
        }
        return true
    }
    
    return false;
};

// Do not edit below this line
module.exports = leapYears;
