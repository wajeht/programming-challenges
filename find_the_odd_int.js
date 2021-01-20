// https://www.codewars.com/kata/54da5a58ea159efa38000836
// my implementation
function findOdd(A) {
    let count = 0;
    let oddArray = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            oddArray.push(A[i]);
        }
    }

    console.log(oddArray);

    return count;
}

const array = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
console.log(findOdd(array));

// -----------------------------------------------------------------------------------
// best practice
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// best practice
function findOdd(A) {
    var obj = {};
    A.forEach(function (el) {
        obj[el] ? obj[el]++ : (obj[el] = 1);
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}
