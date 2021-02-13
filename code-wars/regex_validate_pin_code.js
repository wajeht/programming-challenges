// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
// my implementation

function validatePIN(pin) {
    console.log({ pin: pin, pinLength: pin.length });

    const array = [];
    let character = undefined;

    // if input is more than 4 character
    if (
        pin[0] === '-' ||
        pin[0] === '+' ||
        pin[0] === '.' ||
        (pin.length != 4 && pin.length != 6)
    ) {
        console.log('a');
        return false;
    }

    character = pin.split('');
    console.log({ character: character });

    for (let i = 0; i < character.length; i++) {
        const element = parseInt(character[i]);
        if (isNaN(element)) {
            return false;
        } else {
            //console.log({ element: element, beforeArray: array });
            array.push(element);
        }
    }

    console.log({ array: array });

    if (array.length != 4 && array.length != 6) return false;

    return true;
}

console.log(validatePIN('9a79'));

// best practice
// ====================================================================0===

function validatePIN(pin) {
    var pinlen = pin.length;
    var isCorrectLength = pinlen == 4 || pinlen == 6;
    var hasOnlyNumbers = pin.match(/^\d+$/);

    if (isCorrectLength && hasOnlyNumbers) {
        return true;
    }

    return false;
}
// best practice
// ====================================================================0===

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}
// best practice
// ====================================================================0===

//return true or false
var n = pin.length;
if (n != 4 && n != 6) return false;
for (var i in pin) if (pin[i] > '9' || pin[i] < '0') return false;
return true;
