const scramble = require('./src/scramble.js');

const test = {
    one: {
        arg1: 'rkqodlw',
        arg2: 'world',
    },
    two: {
        arg1: 'cedewaraaossoqqyt',
        arg2: 'codewars',
    },
    three: {
        arg1: 'katas',
        arg2: 'steak',
    },
    four: {
        arg1: 'scriptsjava',
        arg2: 'javascripts',
    },
    five: {
        arg1: 'jscripts',
        arg2: 'javascript',
    },
};

console.log({
    before: {
        one: test.one,
        two: test.two,
        three: test.three,
        four: test.four,
        five: test.five,
    },
    after: {
        one: scramble(test.one.arg1, test.one.arg2),
        two: scramble(test.two.arg1, test.two.arg2),
        three: scramble(test.three.arg1, test.three.arg2),
        four: scramble(test.four.arg1, test.four.arg2),
        five: scramble(test.five.arg1, test.five.arg2),
    },
});
