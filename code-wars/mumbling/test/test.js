const mumbling = require('../src/mumbling.js');

describe('main functiono', () => {
    const param = 'abcd';
    test('test case one', () => {
        expect(mumbling(param)).toBe('A-Bb-Ccc-Dddd');
    });

    test('test case two', () => {
        const param = 'RqaEzty';
        expect(mumbling(param)).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    });

    test('test case three', () => {
        const param = 'cwAt';
        expect(mumbling(param)).toBe('C-Ww-Aaa-Tttt');
    });

    test('test case three', () => {
        const param = 'ZpglnRxqenU';
        expect(mumbling(param)).toBe(
            'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
        );
    });

    test('test case four', () => {
        const param = 'EvidjUnokmM';
        expect(mumbling(param)).toBe(
            'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
        );
    });
});
