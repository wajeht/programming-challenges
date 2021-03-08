// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
// my implementation

function iqTest(numbers) {
    const stringArray = numbers.split(' ');
    const parsedArray = [];
    const even = [];
    const odd = [];

    // convert string into int and push it back up into parsedArray
    stringArray.forEach((element) => {
        if (element % 0 != 0) {
            parsedArray.push(parseInt(element));
        }
    });

    console.log({ parsedArray: parsedArray });

    for (let i = 0; i < parsedArray.length; i += 1) {
        if (parsedArray[i] % 2 != 0) {
            odd.push(i + 1);
        }
    }

    for (let i = 0; i < parsedArray.length; i += 1) {
        if (parsedArray[i] % 2 == 0) {
            even.push(i + 1);
        }
    }

    console.log({ odd: odd, even: even });

    if (odd.length == 1) {
        return odd[0];
    } else {
        return even[0];
    }
}

iqTest('43, 28, 1, 91');

// best practice
// -------------------------------------------------------------------------
function iqTest(numbers) {
    numbers = numbers.split(' ').map(function (el) {
        return parseInt(el);
    });

    var odd = numbers.filter(function (el) {
        return el % 2 === 1;
    });
    var even = numbers.filter(function (el) {
        return el % 2 === 0;
    });

    return odd.length < even.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1;
}
