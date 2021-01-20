// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

// my implementation
function validBraces(braces) {
    // if length of braces are not even,
    // return false
    if (braces.length % 2 != 0) return false;

    let result = [];

    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
            result.push(braces[i]);
        } else if (braces[i] === ')' && result[result.length - 1] === '(') {
            result.pop();
        } else if (braces[i] === '}' && result[result.length - 1] === '{') {
            result.pop();
        } else if (braces[i] === ']' && result[result.length - 1] === '[') {
            result.pop();
        }
    }

    return result.length <= 0 ? true : false;
}

console.log(validBraces('{}()[]'));

// -----------------------------------------------------------------------------------
// best practice
function validBraces(braces) {
    var matches = { '(': ')', '{': '}', '[': ']' };
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) {
            // opening braces
            stack.push(currentChar);
        } else {
            // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}
