const { TestScheduler } = require('jest');
const stringTokenizer = require('../stringTokenizer.js');

describe('string tokenizer function', () => {
    test('sting with white spaces in between', () => {
        const string = 'hello world how are you';
        const whiteSpace = ' ';

        expect(stringTokenizer(string, whiteSpace)).toStrictEqual([
            'hello',
            'world',
            'how',
            'are',
            'you',
        ]);
    });

    test('string with trailing whie spaces at the front', () => {
        const string = '   hello world how are you';
        const whiteSpace = ' ';
        expect(stringTokenizer(string, whiteSpace)).toStrictEqual([
            'hello',
            'world',
            'how',
            'are',
            'you',
        ]);
    });

    test('string with trailing white spaces at the end', () => {
        const string = 'hello world how are you    ';
        const space = ' ';
        expect(stringTokenizer(string, space)).toStrictEqual([
            'hello',
            'world',
            'how',
            'are',
            'you',
        ]);
    });

    test('string with white spaces all over the place', () => {
        const string = '   hello    world       goodbye    ';
        const space = ' ';

        expect(stringTokenizer(string, space)).toStrictEqual(['hello', 'world', 'goodbye']);
    });
});
