const highestScoringWord = require('./highestScoringWord.js');

const testOne = 'man i need a taxi up to ubud';
const testTwo = 'what time are we climbing up the volcano';
const testThree = 'take me to semynak';

console.log({
    before: {
        testOne: testOne,
        testTwo: testTwo,
        testThree: testThree,
    },

    after: {
        testOne: highestScoringWord(testOne),
        testTwo: highestScoringWord(testTwo),
        testThree: highestScoringWord(testThree),
    },
});
