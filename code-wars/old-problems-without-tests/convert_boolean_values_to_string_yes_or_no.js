// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// my implementation

function boolToWord(bool) {
    let result = 'No';

    if (bool === true) {
        result = 'Yes';
    }

    return result;
}

console.log(boolToWord(true));

// best practice
// -----------------------------------------------------------------------
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}
