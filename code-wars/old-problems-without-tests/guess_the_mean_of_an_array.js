// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// my implementation

function getAverage(marks) {
    let sum = 0;
    let length = marks.length;
    let result = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    result = Math.floor(sum / length);

    return result;
}

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));

// best practice
// -----------------------------------------------------------------------
function getAverage(marks) {
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

// best practice
// -----------------------------------------------------------------------
function getAverage(marks) {
    // calculates total number of marks
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
}
