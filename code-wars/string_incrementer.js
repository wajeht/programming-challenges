// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// my implementationz
function incrementString(string) {
    let extractedNumberString = '';
    let parsedExtractedNumberString = 0;
    let extractedString = '';
    let finalResult = '';

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // extract number
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (numbers[i].toString() === string[j]) {
                extractedNumberString += string[j];
            }
        }
    }

    // extact string
    // the extarcteNumberString returns a number
    // we can use that number as an index to extarct a substring from string input
    extractedString = string.substring(0, string.lastIndexOf(extractedNumberString));

    // if there is no number within string
    if (extractedNumberString === '') return string + 1;

    parsedExtractedNumberString = parseInt(extractedNumberString);
    // console.log('String', string, 'Parsed', parsedExtractedNumberString);

    // console.log('exStr', extractedString);
    // console.log('exNum', extractedNumberString);

    // increment the number
    parsedExtractedNumberString += 1;

    // genearral resutl return
    finalResult = extractedString + parsedExtractedNumberString;

    // this is to deal with keeping leading zero
    // for exmaple, normall js will do 001 -> 2
    // the follwing code with fix it to 001 -> 002
    if (extractedNumberString[0] === '0' && extractedNumberString.length > 0) {
        let zero = '';

        for (let i = 0; i < extractedNumberString.length - 1; i++) {
            zero += '0';
        }
        return (
            // it pads the zeros to the front, and extact some depending on length of ext num
            extractedString +
            zero.slice(parsedExtractedNumberString.toString().length - 1) +
            parsedExtractedNumberString
        );
    }

    return finalResult;
}

console.log(incrementString('foobar0099'));

// -------------------------------------------------------------------------------------------
// best practice
function incrementString(input) {
    if (isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
        var up = parseInt(p2) + 1;
        return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}
