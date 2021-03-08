// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// my implementation
// tooke started solveing around 1am
// finished at 3:50
// almost 3 hors

function order(words) {
    const wordsArray = words.split(' ');
    const wordObject = {};
    let result = '';

    // edge case
    if (words === '') {
        return '';
    }

    for (let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];

        for (let j = 0; j < wordsArray[i].length; j++) {
            const character = wordsArray[i][j];
            const parsedIntCharacter = parseInt(character);
            const isNumber = parsedIntCharacter % 1 == 0;
            let position = 0;

            
            if (isNumber) {
                position = parsedIntCharacter;
                wordObject[position] = word;
            }
        }
    }

    console.table(wordObject);

    for (let key in wordObject) {
        result += wordObject[key] + ' ';
    }

    // this will remove trailing spaces from both end
    // because it deosn't accept spaces
    return result.trim();
}

console.log(order('is2 Thi1s T4est 3a'));

// best practice
// ----------------------------------------------------------------------------
function order(words) {
    return words
        .split(' ')
        .sort(function (a, b) {
            return a.match(/\d/) - b.match(/\d/);
        })
        .join(' ');
}

// best practice
// ----------------------------------------------------------------------------

var reg = /\d/;

function order(words) {
    return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
    return +word.match(reg) - +nextWord.match(reg);
}

// best practice
// ----------------------------------------------------------------------------
function order(words) {
    var array = words.split(' ');
    var sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}
