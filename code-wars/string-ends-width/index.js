const main = require('./src/solution.js');

const test = {
    one: {
        arg1: 'abc',
        arg2: 'bc',
    },
    two: {
        arg1: 'abcde',
        arg2: 'abc',
    },
};

console.log({
    before: {
        one: test.one,
        two: test.two,
    },
    after: {
        one: main(test.one.arg1, test.one.arg2),
        two: main(test.two.arg1, test.two.arg2),
    },
});
