function reverseWords(param) {
    const wordsArray = param.split(' ');
    let result = [];

    for (let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];
        let reverse = ' ';

        for (let j = word.length - 1; j >= 0; j--) {
            const char = word[j];

            reverse += char;
        }

        result.push(reverse);
    }

    result = result.join("").trim();

    return result;
}

module.exports = reverseWords;
