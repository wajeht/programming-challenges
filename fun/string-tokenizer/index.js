const stringTokenizer = require('./stringTokenizer');

const string = 'hello world how are you ';
const whiteSpace = ' ';

const stok = stringTokenizer(string, whiteSpace);

console.log({ stringTokenizer: stok });
