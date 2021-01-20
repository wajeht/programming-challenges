// https://www.codewars.com/kata/515e271a311df0350d00000f
// my implementation
function squareSum(numbers) {
    let sum = 0;
    let squaredArray = [];

    for (let i = 0; i < numbers.length; i++) {
        squaredArray.push(numbers[i] * numbers[i]);
        // console.log(squaredArray[i])
    }

    for (let i = 0; i < squaredArray.length; i++) {
        sum += squaredArray[i];
    }

    return sum;
}

// -----------------------------------------------------------------------------------
// best practice
function squareSum(numbers) {
    return numbers.reduce(function (sum, n) {
        return n * n + sum;
    }, 0);
}
