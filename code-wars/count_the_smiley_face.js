// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

//return the total number of smiling faces in the array
function countSmileys(arr) {
    console.log({ arr: arr });
    let validSmileys = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element.length === 2) {
            const firstCharacter = element[0];
            const lastCharacter = element[element.length - 1];

            if (
                (firstCharacter === ':' || firstCharacter === ';') &&
                (lastCharacter === ')' || lastCharacter === 'D')
            ) {
                validSmileys.push(element);
            }
        } else if (element.length === 3) {
            const firstCharacter = element[0];
            const middleCharacter = element[1];
            const lastCharacter = element[element.length - 1];

            if (
                (firstCharacter === ':' || firstCharacter === ';') &&
                (middleCharacter === '-' || middleCharacter === '~') &&
                (lastCharacter === ')' || lastCharacter === 'D')
            ) {
                validSmileys.push(element);
            }
        }
    }
    console.log({ validSmileys: validSmileys });
    return validSmileys.length;
}

// countSmileys([':)', ';(', ';}', ':-D']); // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

console.log(countSmileys([':)', ';(', ';}', ':-D']));

// best practice
// ---------------------------------------------------------------------------
function countSmileys(arr) {
    return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

// best practice
// -------------------------------------------------------------------------
function countSmileys(arr) {
    var smileys = [':)', ';)', ':-)', ';-)', ';~)', ':~)', ':D', ';D', ':-D', ':~D', ';-D', ';~D'];
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < smileys.length; j++) {
            if (arr[i] === smileys[j]) {
                count++;
            }
        }
    }
    return count;
}
