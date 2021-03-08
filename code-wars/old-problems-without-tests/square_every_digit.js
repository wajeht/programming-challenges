// https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript
// my implemention
// dont udner 15 min
function squareDigits(number) {
    let numberString = number.toString();
    let result = 0;

    for (let i = 0; i < numberString.length; i++) {
        result += parseInt(numberString[i] * numberString[i]) + '';
        console.log(result);
    }

    result = parseInt(result.slice(1));

    return result;
}

console.log(squareDigits(9119));

// best practice
// ------------------------------------------------------------------------------
function squareDigits(num) {
    return Number(
        ('' + num)
            .split('')
            .map(function (val) {
                return val * val;
            })
            .join('')
    );
}

// best practice
// ------------------------------------------------------------------------------
function squareDigits(num) {
    var array = num
        .toString()
        .split('')
        .map(function (int) {
            var i = parseInt(int);
            return i * i;
        });

    return parseInt(array.join(''));
}
