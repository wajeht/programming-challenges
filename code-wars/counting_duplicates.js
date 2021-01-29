// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// my implementation
// i figured it out
// but i looked to how to implatennt array.filter method

function duplicateCount(text) {
    let array = [];
    let duplicateArray = [];

    // split into character array
    // convert into lowercase
    text.split('').forEach((element) => {
        array.push(element.toLowerCase());
    });

    // sort the pushed array
    array.sort();

    /// now compare the pushed sorted array within neighboor
    // if they are the smeme,
    // push that element into duplicate array
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            duplicateArray.push(array[i]);
        }
    }

    // now go over the duplicates array
    // and remove the duplicates
    duplicateArray = duplicateArray.filter((element, index, inputArray) => {
        return inputArray.indexOf(element) == index;
    });

    console.log('count: ', duplicateArray.length, ' ', duplicateArray);
}

duplicateCount('Indivisibilities');

// better implementation
// ------------------------------------------------------------------------------
function duplicateCount(text) {
    return (
        text
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/([^])\1+/g) || []
    ).length;
}
// better implementation
// ------------------------------------------------------------------------------
function duplicateCount(text) {
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];

    lower.split('').forEach(function (letter) {
        if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
            count++;
            used.push(letter);
        }
    });

    return count;
}

// better implementation
// ------------------------------------------------------------------------------
function duplicateCount(text) {
    var input = text.toLowerCase().split('');

    var obj = {};

    for (var i in input) {
        if (!obj[input[i]]) {
            obj[input[i]] = 1;
        } else {
            obj[input[i]] += 1;
        }
    }

    var result = 0;

    for (var prop in obj) {
        if (obj[prop] > 1) {
            result++;
        }
    }

    return result;
}
