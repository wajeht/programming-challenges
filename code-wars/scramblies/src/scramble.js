// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
// function scramble(str1, str2) {
//     let letterHolder = {};
//     for (let letter of str1) {
//         if (letterHolder[letter]) letterHolder[letter]++;
//         else letterHolder[letter] = 1;
//     }
//     for (let letter of str2) {
//         if (!letterHolder[letter]) return false;
//         else letterHolder[letter]--;
//     }
//     return true;
// }

// NOTE: spent almost 2 days because my code was too slow.
//       above is what i found on the internet.

function scramble(param1, param2) {
    const sortedOne = param1.split('').sort();
    const map = {};

    // build map  will removed dups
    for (let i = 0; i < sortedOne.length; i++) {
        const element = sortedOne[i];

        if (!map[element]) {
            map[element] = element;
        }
    }

    // console.log({ map: map });

    let two = param2.split('').sort();
    const exTwo = [];

    // sort and remove duplicates
    for (let i = 0; i < two.length; i++) {
        const first = two[i];
        const second = two[i + 1];

        if (first != second) {
            exTwo.push(first);
        }
    }

    // console.log({ exTwo: exTwo });

    let result = [];

    // check inside map
    for (let i = 0; i < exTwo.length; i++) {
        const element = exTwo[i];

        if (map[element]) {
            result.push(element);
        }
    }

    result = result.join('') === exTwo.join('');

    return result;
}

module.exports = scramble;
