const getMiddle = require('../src/getMiddle.js');

describe('main functiono', () => {
    const param = 'test';
    test('test case one', () => {
        expect(getMiddle(param)).toBe('es');
    });

    test('test case two', () => {
        const param = 'testing';
        expect(getMiddle(param)).toBe('t');
    });

    test('test case three', () => {
        const param = 'middle';
        expect(getMiddle(param)).toBe('dd');
    });

    test('test case four', () => {
        const param = 'A';
        expect(getMiddle(param)).toBe('A');
    });
});
