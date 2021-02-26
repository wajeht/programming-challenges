const validParentheses = require('./src/validParentheses.js');

const test = {
    one: '()',
    two: ')(()))',
    three: '(',
    four: '(())((()())())',
};
console.log({
    before: {
        test: {
            one: test.one,
            two: test.two,
            three: test.three,
            four: test.four,
        },
    },
    after: {
        solution: {
            one: validParentheses(test.one),
            two: validParentheses(test.two),
            three: validParentheses(test.three),
            four: validParentheses(test.four),
        },
    },
});
