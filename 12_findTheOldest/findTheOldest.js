const findTheOldest = function(users) {
    return users.reduce((oldest, user) => {
        let oldestFinishAge = oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear();
        let currentFinishAge = user.yearOfDeath ? user.yearOfDeath : new Date().getFullYear();

        let oldestAge = oldestFinishAge - oldest.yearOfBirth;
        let currentAge = currentFinishAge - user.yearOfBirth;

        return oldestAge > currentAge ? oldest : user;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
