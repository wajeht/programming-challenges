const scramble = require('../src/scramble.js');

describe('main functiono', () => {
    const input = {
        arg1: 'rkqodlw',
        arg2: 'world',
    };

    test('test case one', () => {
        expect(scramble(input.arg1, input.arg2)).toBe(true);
    });

    test('test case two', () => {
        const teinputst = {
            arg1: 'cedewaraaossoqqyt',
            arg2: 'codewars',
        };

        expect(scramble(input.arg1, input.arg2)).toBe(true);
    });

    test('test case three', () => {
        const input = {
            arg1: 'katas',
            arg2: 'steak',
        };

        expect(scramble(input.arg1, input.arg2)).toBe(false);
    });
});
