const reverseWords = require('./src/reverseWords.js');

const test = {
    one: 'The quick brown fox jumps over the lazy dog.',
    two: 'apple',
    three: 'double  spaced  words',
};

console.log({
    before: {
        test: {
            one: test.one,
            two: test.two,
            three: test.three,
        },
    },
    after: {
        solution: {
            one: reverseWords(test.one),
            two: reverseWords(test.two),
            three: reverseWords(test.three),
        },
    },
});
