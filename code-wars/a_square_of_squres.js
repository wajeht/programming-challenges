// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// my implementation
var isSquare = function (n) {
    // this will return a squared root nuber
    // but it won't alwasy sbe a single digit
    // sometimes it is double
    const result = Math.sqrt(n);

    // then we check if a number is a double or a whole number
    if (result % 1 === 0) {
        return true;
    } else {
        return false;
    }
};


// -----------------------------------------------------------------------------------
// better solution
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
