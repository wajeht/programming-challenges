const anagrams = require('../src/anagrams.js');

describe('anagrams function', () => {
    test('should equals -> aabb, bbaa', () => {
        const word = 'abba';
        const arra = ['aabb', 'abcd', 'bbaa', 'dada'];
        const result = ['aabb', 'bbaa'];
        expect(anagrams(word, arra)).toStrictEqual(result);
    });

    test('should equals -> carer, racer', () => {
        const word = 'racer';
        const arra = ['crazer', 'carer', 'racar', 'caers', 'racer'];
        const result = ['carer', 'racer'];
        expect(anagrams(word, arra)).toStrictEqual(result);
    });

    test('should equals -> []', () => {
        const word = 'laser';
        const arra = ['lazing', 'lazy', 'lacer'];
        const result = [];
        expect(anagrams(word, arra)).toStrictEqual(result);
    });
});
