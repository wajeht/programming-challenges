function firstNonRepeatingLetter(string) {
    const input = string.split('');
    const map = {};
    const count = 1;
    let result = '';
    const filteredArray = [];

    // build dtionary
    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (!map[element]) {
            map[element] = count;
        } else {
            map[element] = count + 1;
        }
    }
    console.log({ map: map });
    for (let key in map) {
        if (map[key] === 1) {
            filteredArray.push(key);
        }
    }

    return result;
}

module.exports = firstNonRepeatingLetter;
