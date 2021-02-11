// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
// my implementatoin

function list(names) {
    const array = [];
    let result = '';
    let count = 0;
    let newStr = '';
    let lastName = '';

    // push into array
    for (let element of names) {
        const name = element['name'];
        array.push(name);
    }

    lastName = array[array.length - 1];
    //console.log(lastName);

    // jon them with coma
    result = array.join(', ');

    // find space
    for (let character of result) {
        if (character == ' ') {
            count++;
        }
    }

    // add &
    if (count === 0) {
        newStr = result;
    } else if (count === 1) {
        newStr = result.replace(', ', ' & ');
    } else {
        // returns 'Bart, Lisa, Maggie'
        // returns 'Bart, Lisa & Maggie'
        newStr = result.replace(`, ${lastName}`, ` & ${lastName}`);
    }

    return newStr;
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list([{ name: 'Bart' }]));
// console.log(list([]));

// best practice
// -----------------------------------------------------------------------
function list(names) {
    return names.reduce(function (prev, current, index, array) {
        if (index === 0) {
            return current.name;
        } else if (index === array.length - 1) {
            return prev + ' & ' + current.name;
        } else {
            return prev + ', ' + current.name;
        }
    }, '');
}
