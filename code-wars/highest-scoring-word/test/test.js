const highestScoringWord = require('../highestScoringWord.js');

describe('highestScoringWord function', () => {
    test('null list', () => {
        const string = '';
        expect(highestScoringWord(string)).toStrictEqual('');
    });

    test('man i need a taxi up to ubud -> taxi', () => {
        const string = 'man i need a taxi up to ubud taxi';
        expect(highestScoringWord(string)).toStrictEqual('taxi');
    });

    test('what time are we climbing up the volcano -> volcano', () => {
        const string = 'what time are we climbing up the volcano';
        expect(highestScoringWord(string)).toStrictEqual('volcano');
    });

    test('take me to semynak -> semynak', () => {
        const string = 'take me to semynak';
        expect(highestScoringWord(string)).toStrictEqual('semynak');
    });
});
