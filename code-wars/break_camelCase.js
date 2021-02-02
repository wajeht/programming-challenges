// https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript
// my implementation
// i am getting better at solving 6 kyu

function solution(string) {
    const regex = /[A-Z]/g;
    const upperCase = string.match(regex);
    let result = string.split('');

    if (upperCase != null) {
        for (let i = 0; i < string.length; i++) {
            for (let j = 0; j < upperCase.length; j++) {
                const space = ' ' + upperCase[j];
                if (string[i] === upperCase[j]) {
                    result.splice(i, 1, space);
                }
            }
        }
        return result.join('');
    } else {
        return string;
    }
}

console.log(solution('camel'));

// -----------------------------------------------------------------
// best practice
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}

// -----------------------------------------------------------------
// best practice
function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el;
        }
        return el;
    });
    return string.join('');
}
