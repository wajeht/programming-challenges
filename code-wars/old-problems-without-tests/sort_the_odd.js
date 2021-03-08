// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// my implementation

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Return a sorted array.
    const odd = [];
    const even = [];
    const final = [];

    // push all odd element into odd array
    // push all even element into even array
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            odd.push(array[i]);
        } else {
            even.push(array[i]);
        }
    }

    // sort the odd array
    odd.sort((a, b) => {
        return a - b;
    });

    console.log(odd);
    console.log(even);

    // if its even push first else push ood
    for (let i of array) {
        if (i % 2 == 0) {
            final.push(even.shift());
        } else {
            final.push(odd.shift());
        }
    }

    return final;
}

// console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// best practice
// ----------------------------------------------------------------------
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// my implementation

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Return a sorted array.
    const odd = [];
    const even = [];
    const final = [];

    // push all odd element into odd array
    // push all even element into even array
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            odd.push(array[i]);
        } else {
            even.push(array[i]);
        }
    }

    // sort the odd array
    odd.sort((a, b) => {
        return a - b;
    });

    console.log(odd);
    console.log(even);

    // if its even push first else push ood
    for (let i of array) {
        if (i % 2 == 0) {
            final.push(even.shift());
        } else {
            final.push(odd.shift());
        }
    }

    return final;
}

// console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    //sort odds from smallest to largest
    odds.sort(function (a, b) {
        return a - b;
    });

    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = odds.shift();
        }
    }

    return array;
}
