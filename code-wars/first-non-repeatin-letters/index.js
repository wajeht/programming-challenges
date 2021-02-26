const firstNonRepeatingLetter = require('./src/firstNonRepeatingLetter.js');

const test = {
    one: 'a',
    two: 'stress',
    three: 'moonmen',
    four: 'sTreSS',
};

console.log({
    before: {
        one: test.one,
        two: test.two,
        three: test.three,
        four: test.four,
    },
    after: {
        one: firstNonRepeatingLetter(test.one),
        two: firstNonRepeatingLetter(test.two),
        three: firstNonRepeatingLetter(test.three),
        four: firstNonRepeatingLetter(test.four),
    },
});
