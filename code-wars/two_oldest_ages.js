//www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
// return the two oldest/oldest ages within the array of ages passed in.
// my implementation
function twoOldestAges(ages) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < ages.length; i++) {
        if (first < ages[i]) {
            second = first;
            first = ages[i];
            console.log({ first: first });
        } else if (second < ages[i]) {
            second = ages[i];
        }

        console.log({ second: second });
        console.log();
    }

    return { first: first, second: second };
}

console.log(twoOldestAges([1, 2, 10, 99, 23, 1, 6, 8, 3, 3, 8]));

// best practice
// ------------------------------------------------------------------------
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    return ages
        .sort(function (a, b) {
            return a - b;
        })
        .slice(-2);
}
