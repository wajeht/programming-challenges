const anagrams = require('./src/anagrams.js');

const testOne = {
    word: 'abba',
    array: ['aabb', 'abcd', 'bbaa', 'dada'],
};
const testTwo = {
    word: 'racer',
    array: ['crazer', 'carer', 'racar', 'caers', 'racer'],
};

console.log({
    before: {
        testOne: {
            word: testOne.word,
            array: testOne.array,
        },
        testTwo: {
            word: testTwo.word,
            array: testTwo.array,
        },
    },
    after: {
        testOne: anagrams(testOne.word, testOne.array),
        testTwo: anagrams(testTwo.word, testTwo.array),
    },
});
