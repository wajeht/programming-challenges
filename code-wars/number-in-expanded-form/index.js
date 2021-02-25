const expandForm = require('./src/expandForm.js');

const testOne = 12;
const testTwo = 42;
const testThree = 70304;
const testFour = 420370022;

console.log({
    before: {
        testOne: testOne,
        testTwo: testTwo,
        testThree: testThree,
        testFour: testFour,
    },
    after: {
        testOne: expandForm(testOne),
        testTwo: expandForm(testTwo),
        testThree: expandForm(testThree),
        testFour: expandForm(testFour),
    },
});
