// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
// my implementation
// this one took less than 20 minutes
// this is the first time i solved a problem under 20 minutes

function findOutlier(integers) {
    let odd = [];
    let even = [];

    odd = integers.filter((integers, index, inputArray) => {
        return (inputArray = integers % 2 != 0);
    });

    even = integers.filter((integers, index, inputArray) => {
        return (inputArray = integers % 2 == 0);
    });

    // console.log('Odd:', odd, 'Even: ', even);
    // console.log('odd.lengh:', odd.length, 'even.length:', even.length);

    if (odd.length == 1) {
        return odd[0];
    }

    if (even.length == 1) {
        return even[0];
    }
}

findOutlier([160, 3, 1719, 19, 11, 13, -21]);

// best practice
// --------------------------------------------------------------------------------------
function findOutlier(int) {
    var even = int.filter((a) => a % 2 == 0);
    var odd = int.filter((a) => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}
