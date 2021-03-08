// https://www.codewars.com/kata/5287e858c6b5a9678200083c
// my implementation
function narcissistic(value) {
    // Code me to return true or false
    let sum = 0;
    let power = value.toString().length;
    let array = [];

    for (let i = 0; i < value.toString().length; i++) {
        let base = parseInt(value.toString()[i]);
        // console.log('Powering -> ', Math.pow(base, power));
        sum += Math.pow(base, power);
        // console.log('Summing -> ', sum);
    }

    return sum === value;

    //console.log(power)
    //console.log(sum);
}

console.log(narcissistic(153));

// best practice
function narcissistic(value) {
    return (
        ('' + value).split('').reduce(function (p, c) {
            return p + Math.pow(c, ('' + value).length);
        }, 0) == value
    );
}

// -----------------------------------------------------------------------------------
// best practice
function narcissistic(value) {
    return (
        ('' + value).split('').reduce(function (p, c) {
            return p + Math.pow(c, ('' + value).length);
        }, 0) == value
    );
}

// best practice
function narcissistic(value) {
    return (
        value
            .toString()
            .split('')
            .map((x, i, arr) => x ** arr.length)
            .reduce((a, b) => +a + +b) === value
    );
}
