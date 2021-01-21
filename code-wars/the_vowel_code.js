// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
// my implementation
// this one took a while, but it is easy

function encode(string) {
    let encode = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };

    let input = string;

    for (let i = 0; i < string.length; i++) {
        for (let property in encode) {
            if (property === string[i]) {
                input = input.replace(string[i], encode[property]);
            }
        }
    }

    return input;
}

console.log(encode('hello'));

function decode(string) {
    let decode = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };

    let input = string;

    for (let i = 0; i < string.length; i++) {
        for (let property in decode) {
            if (property === string[i]) {
                input = input.replace(string[i], decode[property]);
            }
        }
    }

    return input;
}

console.log(decode('hello'));

// ---------------------------------------------------------------------------------------
// best practice

// turn vowels into numbers
function encode(string) {
    return string.replace(/[aeiou]/g, function (x) {
        return '_aeiou'.indexOf(x);
    });
}

//turn numbers back into vowels
function decode(string) {
    return string.replace(/[1-5]/g, function (x) {
        return '_aeiou'.charAt(x);
    });
}

// ---------------------------------------------------------------------------------------
// best practice

function encode(string) {
    var vowelMapping = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    return codeStringGivenMapping(string, vowelMapping);
}

function decode(string) {
    var vowelMapping = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
    return codeStringGivenMapping(string, vowelMapping);
}

function codeStringGivenMapping(string, mapping) {
    return string
        .split('')
        .map(function (char) {
            return mapping[char] || char;
        })
        .join('');
}

// ---------------------------------------------------------------------------------------
// best practice

const table = ['a', 'e', 'i', 'o', 'u'];
const encode = (string) =>
    string
        .split('')
        .map((x) => table.indexOf(x) + 1 || x)
        .join('');
const decode = (string) =>
    string
        .split('')
        .map((x) => table[Number(x) - 1] || x)
        .join('');
