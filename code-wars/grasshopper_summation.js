// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// my implementation

function summation(number) {
    let sum = 0;

    for (let i = 1; i < number + 1; i++) {
        //console.log(i);
        sum += i;
    }

    return sum;
}

console.log(summation(8));

// best practice
// ----------------------------------------------------------------------------
const summation = (n) => (n * (n + 1)) / 2;

// best practice
// ----------------------------------------------------------------------------
function summation(num) {
    return (num * (num + 1)) / 2;
}
