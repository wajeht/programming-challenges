function highestScoringWord(string) {
    let counter = 0;

    const abcd = 'abcdefghijklmnopqrstuvwxyz';
    const dictionary = {};

    // build dictionary
    for (let alphabet of abcd) {
        if (!dictionary[alphabet]) {
            counter += 1;

            dictionary[alphabet] = counter;
        }
    }

    // turn input sting to array
    const input = string.trim().split(' ');

    const map = {};

    let value = undefined;
    let sum = 0;

    // look up char position from element cahr from dictionary
    // then sum it up
    for (let element of input) {
        value = element;
        character = element;

        // sum up each char of the element
        for (let char of element) {
            sum += dictionary[char];
        }

        // push that last character as key, and element as value into map obejct
        if (!map[sum]) {
            map[sum] = value;
        }

        // set sum back to zero
        sum = 0;
    }

    // now grip the last key from map
    const lastValue = Object.keys(map).sort((a, b) => a - b)[Object.keys(map).length - 1];

    // console.log(Object.keys(map).sort());
    // console.log({ map: map });
    // console.log({ lastValue: lastValue });

    return map[lastValue];
}

module.exports = highestScoringWord;
