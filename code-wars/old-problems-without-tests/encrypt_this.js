// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.

// i didn't not finish this
// if i kept working on it, i will eventually got it working
// but this was taking me the whole day solve it.

// my impleentatoin
var encryptThis = function (text) {
    const array = text.split(' ');
    const result = [];
    let current = '';

    for (let i = 0; i < array.length; i++) {
        const firstIndex = 0;
        const secondIndex = 1;
        const lastIndex = array[i].length - 1;

        current = array[i];

        const ascii = array[i][firstIndex].charCodeAt(0);
        console.log({ ascii: ascii });
        console.log({ current: array[i] });

        if (current.length - 1 <= 1) {
            current = current.charCodeAt(0);
            result.push(current);
        } else {
            const firstCharacter = array[i][0];
            const secondCharacter = array[i][secondIndex];
            const lastCharacter = array[i][lastIndex];
            console.log({
                firstCharacter: firstCharacter,
                secondCharacter: secondCharacter,
                lastCharacter: lastCharacter,
            });

            current =
                ascii +
                lastCharacter +
                current.slice(secondIndex + 1, lastIndex - 1) +
                secondCharacter;
            console.log({ result: current });

            result.push(current);
            console.table(result);
            console.log();
            console.log('-----------------------------------------------------------------');
            console.log();
        }
    }

    return result.join(' ');
};

console.log(encryptThis('A wise old owl lived in an oak'));
console.log('65 119esi 111dl 111lw 108dvei 105n 97n 111ka');
// encryptThis("hello world") === "104olle 119drlo"



/// best practice
// ----------------------------------------------------------------
// function encryptThis(string) {
//     if (string.length === 0) {
//       return false
//     }
//     const encryptedString = []
//     const words = string.split(' ')
//     for (i = 0; i < words.length; i++) {
//       const word = words[i].split('')
//       word.splice(0, 1, word[0].charCodeAt())
//       word.splice(1, 1, words[i][word.length-1])
//       word.splice(word.length-1, 1, words[i][1])
//       encryptedString.push(word.join(''))
//     }
//     return encryptedString.join(' ')
//   }