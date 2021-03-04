const getMiddle = require('./src/getMiddle.js');

const test = {
    one: {
        test: 'test',
        result: 'es',
    },
    two: {
        test: 'testing',
        result: 't',
    },
    three: {
        test: 'middle',
        result: 'dd',
    },
    four: {
        test: 'A',
        result: 'A',
    },
};

console.log({
    before: {
        test: {
            one: test.one.test,
            two: test.two.test,
            three: test.three.test,
            four: test.four.test,
        },
    },
    after: {
        solution: {
            one: getMiddle(test.one.test),
            two: getMiddle(test.two.test),
            three: getMiddle(test.three.test),
            four: getMiddle(test.four.test),
        },
    },
});
