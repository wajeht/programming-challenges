// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
// Return the next square if sq is a perfect square, -1 otherwise
// my implementatoin

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);

    if (sqrt % 1 == 0) {
        sqrt += 1; // increment 1
        sqrt = sqrt * sqrt; // square the incremented number
        return sqrt;
    }

    return -1;
}

console.log(findNextSquare(121));

// best practice
// ---------------------------------------------------------------------
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

// ebst practice
// ------------------------------------------------------------------
function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if (Math.round(number) === number) {
        return Math.pow(++number, 2);
    }
    return -1;
}
