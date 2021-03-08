// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// my implementation

function filter_list(list) {
    const numberArray = [];
    const isNumber = typeof 0;

    for (let i = 0; i < list.length; i++) {
        const elementIsNumber = typeof list[i];

        if (isNumber === elementIsNumber) {
            numberArray.push(list[i]);
        }
    }

    return numberArray;
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// best practice
// --------------------------------------------------------------------
function filter_list(l) {
    return l.filter(function (v) {
        return typeof v == 'number';
    });
}
