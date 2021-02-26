const solution = require('../src/solution.js');

describe('main functiono', () => {
    test('test case one', () => {
        const param1 = 'abc';
        const param2 = 'bc';
        const result = true;
        expect(solution(param1, param2)).toBe(result);
    });

    test('test case two', () => {
        const param1 = 'abcde';
        const param2 = 'abc';
        const result = false;
        expect(solution(param1, param2)).toBe(result);
    });
});
