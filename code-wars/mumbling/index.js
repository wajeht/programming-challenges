const mumbling = require('./src/mumbling.js');
const test = {
    one: {
        arg1: 'abcd',
        arg2: 'A-Bb-Ccc-Dddd',
    },
    two: {
        arg1: 'RqaEzty',
        arg2: 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy',
    },
    three: {
        arg1: 'cwAt',
        arg2: 'C-Ww-Aaa-Tttt',
    },
};

console.log({
    before: {
        test: {
            one: test.one.arg1,
            two: test.two.arg1,
            three: test.three.arg1,
        },
    },
    after: {
        solution: {
            one: mumbling(test.one.arg1),
            two: mumbling(test.two.arg1),
            three: mumbling(test.three.arg1),
        },
    },
});
