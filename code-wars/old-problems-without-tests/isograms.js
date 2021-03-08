// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// my implementation

// had to look it up

function isIsogram(str) {
    const strArray = str.toLowerCase().split('');
    const strObject = {};
    let isIsogram = true;

    for (let character of strArray) {
        if (strObject[character]) {
            strObject[character] += strObject[character];
        } else {
            strObject[character] = 1;
        }
    }

    for (let character in strObject) {
        if (strObject[character] > 1) {
            isIsogram = false;
        }
    }

    return isIsogram;
}

console.log(isIsogram('aba'));

// best practice
// ------------------------------------------------------------------------
function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i)
        for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
    return true;
}

// best practice
// ------------------------------------------------------------------------
function isIsogram(str) {
    // Downcase everything, split on letters.
    str_lc = str.toLowerCase();
    var letters = str_lc.split('');

    // Utility: checks whether the given "value" at "index" is actually
    // first encountered at this "index" position within a string ("self").
    // Expected to be used with Array#filter.
    var check4uniqueness = function (value, index, self) {
        return self.indexOf(value) === index;
    };

    // An isogram string contains no duplicate, hence must have the same
    // length than the array composed of unique letters from that string.
    return letters.filter(check4uniqueness).length == str.length;
}
