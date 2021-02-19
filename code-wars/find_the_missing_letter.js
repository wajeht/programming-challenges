// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
// my implementation

// function findMissingLetter(array) {
//     const alphabets = 'abcdefghijklmnopqrstuvwxyz';
//     const userInput = array.join('').toLowerCase();
//     const index = alphabets.indexOf(userInput[0]);
//     console.log(index);
//     let result = undefined;

//     for (let i = index; i < alphabets.length; i++) {
//         for (let j = 0; j < userInput.length; j++) {
//             console.log({ alphabets: alphabets[i], userInput: userInput[j] });
//             if (alphabets[i] !== userInput[j]) {
//                 result = alphabets[i];
//                 //console.log({ result: result });
//                 break;
//             }
//         }
//     }

//     //console.log();
//     return { 'result->': result };
// }

function findMissingLetter(array) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const userInput = array.join('').toLowerCase();
    const start = alphabets.lastIndexOf(userInput[0]);
    const slice = alphabets.slice(start);
    let result = undefined;
    console.log({ start: start });

    console.log({ userInput: userInput, slice: slice });

    for (let abcd of slice) {
        for (let char of userInput) {
            console.log({ abcd: abcd, char: char });
        }
    }

    return result;
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

// best practice
// -------------------------------------------------------------------------
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0);
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i);
        }
    }
    throw new Error('Invalid input');
}

// best practice
// -------------------------------------------------------------------------
function findMissingLetter(array) {
    var i = array[0].charCodeAt();
    array.map((x) => (x.charCodeAt() == i ? i++ : i));
    return String.fromCharCode(i);
}
