// https://www.codewars.com/kata/514b92a657cdc65150000006
// my implementation
function solution(number) {
    let result = [];

    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result.push(i);
        }
    }

    let sum = 0;

    for (let i = 0; i < result.length; i++) {
        sum += result[i];
        console.log(result[i]);
    }

    return sum;
}

// -----------------------------------------------------------------------------------
// best practice
function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
