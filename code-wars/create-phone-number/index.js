const createPhoneNumber = require('./src/createPhoneNumber.js');

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log({
    before: {
        one: Array.from(test),
    },
    after: {
        one: createPhoneNumber(test),
    },
});
