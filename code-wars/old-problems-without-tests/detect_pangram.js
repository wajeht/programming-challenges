/*  Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 *  Note: took almost 2 hours
 *  My Implementation
 */

function isPangram(string) {
    const aToZ = 'abcdefghjklmnopqrstuvwxyz';
    const aToZObject = {};
    for (let character of aToZ) {
        if (!aToZ[character]) {
            aToZObject[character] = 1;
        } else {
            aToZObject[character] += 1;
        }
    }

    const array = string.toLowerCase().split('').sort();
    const stringObject = {};
    let pangram = false;

    // remove delimeters from array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ' ' || (array[i] === '.') === '/') {
            array.splice(0, 1);
        }
    }

    // push every element from array into object
    for (let character of array) {
        if (!stringObject[character]) {
            stringObject[character] = 1;
        } else {
            stringObject[character] += 1;
        }
    }

    // now compare, it exist then set it ttrue, if it doesn't then set it to false, the break out of the loop
    for (let property in aToZObject) {
        if (stringObject.hasOwnProperty(property)) {
            pangram = true;
        } else {
            pangram = false;
            break;
        }
    }

    console.log('Before:', aToZObject);
    console.log('After:', stringObject);

    return pangram;
}

console.log(isPangram('abcdefghijklmopqrstuvwxyz'));

// better implementation
// --------------------------------------------------------------------------------
function isPangram(string) {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

// better implementation
// --------------------------------------------------------------------------------
function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => string.toLowerCase().includes(x));
}

// better implementation
// --------------------------------------------------------------------------------
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = 'zqxjkvbpygfwmucldrhsnioate';
    for (var i = 0; i < 26; i++) if (s.indexOf(letters.charAt(i)) == -1) return false;
    return true;
}
