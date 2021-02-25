// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, array) {
    let sortedWord = word.split('').sort();
    sortedWord = sortedWord.join('');
    const result = [];

    // console.log({ sortedWord: sortedWord });

    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        let sortedElement = array[j].split('').sort();
        sortedElement = sortedElement.join('');

        // console.log({ sortedElement: sortedElement });

        if (sortedWord === sortedElement) {
            result.push(element);
        }
    }

    return result;
}

module.exports = anagrams;
