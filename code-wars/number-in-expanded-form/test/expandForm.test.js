const expandForm = require('../src/expandForm.js');

describe('expandForm function', () => {
    test('should return -> 10 + 2', () => {
        const number = 12;
        expect(expandForm(number)).toBe('10 + 2');
    });

    test('should return -> 40 + 2', () => {
        const number = 42;
        expect(expandForm(number)).toBe('40 + 2');
    });

    test('Should return -> 70000 + 300 + 4', () => {
        const number = 70304;
        expect(expandForm(number)).toBe('70000 + 300 + 4');
    });
});
