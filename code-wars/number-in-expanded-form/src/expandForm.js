function expandForm(number) {
    // split input number into string of char array
    const inputNumberArray = number.toString().split('');
    let zero = [];

    const array = [];

    let result = [];

    // build zeros
    for (let i = 0; i < inputNumberArray.length; i++) {
        zero.push('0');
    }

    while (inputNumberArray.length) {
        // remove fist element of the inputNumber array and save it
        let element = inputNumberArray.shift();

        // remove 0 from built zero each iteratoin
        zero.shift('');

        // combined first element iwth the rest of the zero
        // and push it into array
        const a = element + zero.join('');

        array.push(a);
    }

    // now remove zero duplicates witin array
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element[0] != '0') {
            result.push(element)
        }
    }

    result = result.join(" + ")

    return result;
}

module.exports = expandForm;
