// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// https://www.codewars.com/kata/55908aad6620c066bc00002a
// my implementation

function XO(str) {
    let countOfX = 0;
    let countOfO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x' || str[i] === 'X') {
            countOfX++;
        }

        if (str[i] === 'O' || str[i] === 'o') {
            countOfO++;
        }
    }

    return countOfO === countOfX;
}

console.log(XO('xooX'));

// -----------------------------------------------------------------------------------
// best practice
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

// best practice
const XO = (str) => {
    str = str.toLowerCase().split('');
    return str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length;
};
