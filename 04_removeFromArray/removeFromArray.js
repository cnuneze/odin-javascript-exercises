const removeFromArray = function(arrayNumber, ...excludedValues) {
    return arrayNumber.filter((number) => {
        for (const excludeValue of excludedValues) {
            if (number === excludeValue) {
                return false;
            }
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
