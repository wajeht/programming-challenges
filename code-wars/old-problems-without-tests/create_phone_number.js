// https://www.codewars.com/kata/525f50e3b73515a6db000b83/
// my implementation
function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx';

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

let result = 'asdfadf';

const s = result.repeat(2);
console.log(result);
console.log(s);

// best practice
// -----------------------------------------------------------------------------------
