// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/
// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters
// then it should replace the missing second character of the final pair with an underscore('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// my implimentation
function solution(str) {
    let string = str;
    let result = [];

    // if the string is empty
    if (string.length <= 0) return result;

    if (string.length === 1) {
        result.push(string + '_');
        return result;
    }

    // if there is more than one character and not even add _ at the end
    if (string.length > 1 && string.length % 2 !== 0) {
        string = string + '_';
    }

    // loop through the list
    // substr extract from a string
    for (let i = 0; i < string.length; i += 2) {
        result.push(string.substr(i, 2));
    }

    return result;
}

// -----------------------------------------------------------------------------------
// better solution
function solution(str) {
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
        str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }
    return result;
}
