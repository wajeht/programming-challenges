// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
// my implementation

function pipeFix(numbers) {
    const sortedArray = numbers.sort((a, b) => {
        return a - b;
    });

    const start = sortedArray[0];
    const length = sortedArray[sortedArray.length - 1];
    const result = [];

    for (let i = start; i < length + 1; i++) {
        result.push(i);
    }

    return result;
}

console.log(pipeFix([6, 7, 8]));

// best practice
// -----------------------------------------------------------------------
function getMaxOfArray(numbers) {
    return Math.max.apply(null, numbers);
}

function getMinOfArray(numbers) {
    return Math.min.apply(null, numbers);
}

function pipeFix(numbers) {
    var newArray = [];
    var min = getMinOfArray(numbers);
    var max = getMaxOfArray(numbers);
    for (var i = min; i <= max; i++) {
        newArray.push(i);
    }
    return newArray;
}
