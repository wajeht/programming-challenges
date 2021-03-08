/*
* https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
*
* Build Tower
*
* Build Tower by the following given argument:
* number of floors (integer and always greater than 0).
*
* Tower block is represented as *
*
* Python: return a list;
* JavaScript: returns an Array;
*
* and a tower of 6 floors looks like below

* [
*   '     *     ', 
*   '    ***    ', 
*   '   *****   ', 
*   '  *******  ', 
*   ' ********* ', 
*   '***********'
* 
*    this took me a good 2 hours 
*    i did not look it up
*    proud of this
*/

function getBlocksArray(nFloors) {
    // build here
    let count = 1;
    let odd = 1;
    let level = nFloors;
    let array = [];

    while (true) {
        odd += 2;
        array.push(odd);

        count++;
        if (count === level) {
            break;
        }
    }

    return array;
}

function towerBuilder(nFloors) {
    const array = getBlocksArray(nFloors);
    const block = '*';
    let level = '';

    const result = [];

    // print starts
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        // console.log(element);
        for (let j = 0; j < element; j++) {
            level += block;
        }

        result.push(level);

        level = '';
    }
    result.unshift('*');

    // make space
    let space = ' ';
    const lengthOfLastElementOfResult = result[result.length - 1].length - 1;
    for (let i = 0; i < lengthOfLastElementOfResult; i++) {
        space += ' ';
    }
    // console.log({ space: space, space_length: space.length });
    //console.log();

    const final = [];
    let finalresult = [];

    for (let i = 0; i < result.length; i++) {
        const currentElement = result[i];
        const currentElementLength = result[i].length;
        const full = space.length - currentElementLength;
        const mid = full / 2;

        final.push(space);

        // console.log({
        //     currentElement: currentElement,
        //     currentElementLength: currentElementLength,
        //     full: full,
        //     mid: mid,
        // });

        const spacesArray = space.split('');
        //console.log(spacesArray);

        spacesArray.splice(mid, currentElementLength, currentElement);

        const after = spacesArray.join('');

        finalresult.push(after);
    }

    return finalresult;
}

console.log(towerBuilder(19));

// best practice
// ----------------------------------------------------------------------------------------
function towerBuilder(nFloors) {
    var result = [];
    var starNumber = 1;
    for (i = 1; i <= nFloors; i++) {
        result[i - 1] = ' '.repeat(nFloors - i) + '*'.repeat(starNumber) + ' '.repeat(nFloors - i);
        starNumber += 2;
    }
    return result;
}
