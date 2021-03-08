// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// my implemenation
// got 70% right
// didn't finished it, looked it up

function arrayDiff(a, b) {
    let result = [];

    if (a.length == 0 && b.length > 0) {
        return [];
    } else if (a.length > 0 && b.length == 0) {
        return a;
    }

    for (let i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] != b[j]) {
                result.push(a[i]);
            }
        }
    }
    console.log(result);

    return result;
}

console.log(arrayDiff([2, -20, 7, 11, -20, 13, 2, 6], [13, 7, 11]));

// best practice
// --------------------------------------------------------------------
function array_diff(a, b) {
    return a.filter((e) => !b.includes(e));
}
