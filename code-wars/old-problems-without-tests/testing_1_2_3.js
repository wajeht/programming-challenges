// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/solutions/javascript
// my implementation

function number(array) {
    let result = array.map((element, index) => {
        // console.log(element, index);
        return `${index + 1}: ${element}`;
    });

    return result;
}

console.log(number(['a', 'b', 'c']));

// best practice
// ----------------------------------------------------------------------------
var number = function (array) {
    return array.map(function (line, index) {
        return index + 1 + ': ' + line;
    });
};

// best practice
// ----------------------------------------------------------------------------
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);
