// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// my implementation

function solution(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(solution('world'));

// best practice
// -------------------------------------------------------------------------
function solution(str) {
    return str.split('').reverse().join('');
}
