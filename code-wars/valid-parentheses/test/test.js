const validParentheses = require('../src/validParentheses.js');

describe('main functiono', () => {
    const param = '()';
    test('test case one', () => {
        expect(validParentheses(param)).toBe(true);
    });

    test('test case two', () => {
        const param = ')(()))';
        expect(validParentheses(param)).toBe(false);
    });

    test('test case three', () => {
        const param = '(';
        expect(validParentheses(param)).toBe(false);
    });

    test('test case three', () => {
        const param = '(())((()())())';
        expect(validParentheses(param)).toBe(true);
    });
});
