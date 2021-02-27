const createPhoneNumber = require('../src/createPhoneNumber.js');

describe('main functiono', () => {
    const param = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    test('test case one', () => {
        expect(createPhoneNumber(param)).toBe('(123) 456-7890');
    });
});
