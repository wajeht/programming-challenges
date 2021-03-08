// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// my implementation
// done in 15 minutes
function descendingOrder(n) {
    let stringArray = n.toString().split('');

    stringArray.sort().reverse();

    for (let i = 0; i < stringArray.length; i++) {
        stringArray.splice(i, 1, parseInt(stringArray[i]));
    }

    return parseInt(stringArray.splice('').join(''));
}

console.log(descendingOrder(123456789));

// best practice
// -----------------------------------------------------------------------
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

// best practice
// -----------------------------------------------------------------------
function descendingOrder(n) {
    return +(n + '')
        .split('')
        .sort(function (a, b) {
            return b - a;
        })
        .join('');
}
