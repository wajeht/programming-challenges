// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// my implementation

function longest(stringOne, stringTwo) {
    let map = {};
    const combinedString = stringOne.concat(stringTwo);
    let result = '';

    for (let character of combinedString) {
        map[character] = 1;
    }

    result = Object.keys(map).sort().join('');

    return result;
}

console.log(longest('aretheyhere', 'yestheyarehere'));

// best practice
// -----------------------------------------------------------------------
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2))
        .sort()
        .join('');
}
