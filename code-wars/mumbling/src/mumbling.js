function mumbling(param) {
    const array = [];
    let word = '';
    const result = [];

    // build repeated char array
    for (let i = 0; i < param.length; i++) {
        const element = param[i];

        // if you put 0, it will cut of the first character
        for (let j = -1; j < i; j++) {
            // repeat each character
            word += element.toLowerCase();
        }
        // after char repeated, push into array
        array[i] = word;

        // reset word to blank for next iteration
        word = '';
    }
    // console.log({ array: array });

    // build array with fist char capitalzed
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(''); // split into char array
        element.splice(0, 1, element[0].toUpperCase()); // then capitalize first char
        element = element.join(''); // conbine them back ton string

        result[i] = element; // push it back into result array
    }

    // console.log({ result: result });

    return result.join('-');
}

module.exports = mumbling;
