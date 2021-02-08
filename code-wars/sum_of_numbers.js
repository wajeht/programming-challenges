// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/python
// my implimentation

function getSum(a, b) {
    let startingPosition = 0;
    let endingPosition = 0;

    if (a < b) {
        startingPosition = a;
        endingPosition = b;
    } else {
        startingPosition = b;
        endingPosition = a;
    }

    console.log('startingPosition', startingPosition, 'endingPosition', endingPosition);

    let sum = 0;

    for (let i = startingPosition; i < endingPosition + 1; i++) {
        sum += i;
    }

    return '-> ' + sum;
}

console.log(getSum(-1, 2));

// best practice
// -------------------------------------------------------------------------

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return ((max - min + 1) * (min + max)) / 2;
};

// best practice
// -------------------------------------------------------------------------
function GetSum(a, b) {
    if (a == b) return a;
    else if (a < b) return a + GetSum(a + 1, b);
    else return a + GetSum(a - 1, b);
}
