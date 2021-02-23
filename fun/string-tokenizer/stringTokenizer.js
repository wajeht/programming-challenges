function stringTokenizer(string, delimeter) {
    const array = [];
    let deli = delimeter;
    let token = undefined;

    while (true) {
        // index of sapce
        deli = string.indexOf(' ');

        if (deli === -1) {
            if (string != '') {
                array.push(string);
            }
            break;
        }

        // word -> from 0 to index of space
        token = string.substring(0, deli);

        if (token != '') {
            array.push(token);
        }

        // resign the string so it subtract the first word
        // you gotta push +1 because of
        // " world good bye"
        // with +1 it will be
        // "world good bye" without the space
        string = string.substring(deli + 1);

        // console.log({ token: token, string: string, length: length });
    }

    return array;
}

module.exports = stringTokenizer;
