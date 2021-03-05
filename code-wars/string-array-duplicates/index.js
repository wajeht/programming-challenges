const dup = require('./src/dup.js');

const test = {
    one: ['abracadabra', 'allottee', 'assessee'],
    two: ['kelless', 'keenness'],
    three: ['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi'],
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
            one: dup(test.one),
            two: dup(test.two),
            three: dup(test.three),
        },
    },
});
