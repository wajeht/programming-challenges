const reverseWords = require('../src/reverseWords.js');

describe('main functiono', () => {
    const param = 'The quick brown fox jumps over the lazy dog.';
    const result = 'ehT kciuq nworb xof spmuj revo eht yzal .god';
    test('test case one', () => {
        expect(reverseWords(param)).toBe(result);
    });

    test('test case two', () => {
        const param = 'apple';
        const result = 'elppa';
        expect(reverseWords(param)).toBe(result);
    });

    test('test case three', () => {
        const param = 'double  spaced  words';
        const result = 'elbuod  decaps  sdrow';
        expect(reverseWords(param)).toBe(result);
    });
});
