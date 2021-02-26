const firstNonRepeatingLetter = require('../src/firstNonRepeatingLetter.js');

describe('firstNonRepeatingLetter function', () => {
    test('should return -> a', () => {
        const word = 'a';
        expect(firstNonRepeatingLetter(word)).toBe('a');
    });

    test('should return -> t', () => {
        const word = 'stress';
        expect(firstNonRepeatingLetter(word)).toBe('t');
    });

    test('should return -> a', () => {
        const word = 'moonmen';
        expect(firstNonRepeatingLetter(word)).toBe('e');
    });
});
