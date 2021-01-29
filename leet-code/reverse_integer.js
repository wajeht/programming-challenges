/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */

//my implementation
var reverse = function (x) {
    let result = '';

    let i = x.toString().length - 1;
    // console.log('i = ', i);

    while (i >= 0) {
        result += x.toString()[i];
        //console.log('result', result, 'i = ', i);
        i--;
    }

    if (x.toString()[0] === '-') {
        return Number(parseInt('-' + result));
    } else {
        return result;
    }
};

console.log(reverse(-123));

// better implimentation
// --------------------------------------------------------------------
var reverse = function (x) {
    let revNum = 0,
        lastDigit = 0;
    while (x !== 0) {
        lastDigit = x % 10;
        x = parseInt(x / 10);
        revNum = revNum * 10 + lastDigit;
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0;
    }
    return revNum;
};
