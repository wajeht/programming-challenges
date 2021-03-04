function getMiddle(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let firstIndex;

        if (string.length % 2 == 0) {
            firstIndex = string.length / 2;
            result = string.substring(firstIndex - 1, firstIndex + 1);
        } else {
            firstIndex = Math.floor(string.length / 2);
            result = string.charAt(firstIndex);
        }
    }

    return result;
}

module.exports = getMiddle;
