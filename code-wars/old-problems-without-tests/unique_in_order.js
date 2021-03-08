// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// my implementation

function uniqueInOrder(iterable) {
    const input = typeof iterable;
    const isArray = typeof [];
    const isString = typeof '';

    let array = [];
    let result = [];
    let obj = {};

    if (input === isArray) {
        array = iterable;
    } else if (input === isString) {
        array = iterable.split('');
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) {
            result.push(array[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        obj[result[i]] = i;
    }

    return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// best practice
// -----------------------------------------------------------------------

function uniqueInOrder(it) {
    var result = [];
    var last;

    for (var i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push((last = it[i]));
        }
    }

    return result;
}

// best practice
// -----------------------------------------------------------------------
var uniqueInOrder = function (iterable) {
    var res = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) res.push(iterable[i]);
    }
    return res;
};
