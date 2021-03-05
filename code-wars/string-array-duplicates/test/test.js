const dup = require('../src/dup.js');

describe('main functiono', () => {
    const param = ['abracadabra', 'allottee', 'assessee'];
    const result = ['abracadabra', 'alote', 'asese'];

    test('test case one', () => {
        expect(dup(param)).toStrictEqual(result);
    });

    test('test case two', () => {
        const param = ['kelless', 'keenness'];
        const result = ['keles', 'kenes'];

        expect(dup(param)).toStrictEqual(result);
    });

    test('test case three', () => {
        const param = ['callalloo', 'feelless', 'heelless'];
        const result = ['calalo', 'feles', 'heles'];

        expect(dup(param)).toStrictEqual(result);
    });

    test('test case four', () => {
        const param = ['kelless', 'voorraaddoosspullen', 'achcha'];
        const result = ['keles', 'voradospulen', 'achcha'];
        expect(dup(param)).toStrictEqual(result);
    });
});
