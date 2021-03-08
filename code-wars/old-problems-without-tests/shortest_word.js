// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript
// my implementation
// done under 5 mintes

function findShort(string) {
    const wordArray = string.split(' ');
    const length = [];

    for (let i = 0; i < wordArray.length; i++) {
        length.push(wordArray[i].length);
        // console.log(wordArray[i]);
    }

    // console.log(length);
    return length.sort((a, b) => {
        return a - b;
    })[0];
}

console.log(findShort('turns out random test cases are easier than writing out basic ones'));

// best practice
// ---------------------------------------------------------------------------
function findShort(s) {
    return Math.min.apply(
        null,
        s.split(' ').map((w) => w.length)
    );
}

// best practice
// ---------------------------------------------------------------------------
function findShort(s) {
    return Math.min(...s.split(' ').map((s) => s.length));
}

// best practice
// ---------------------------------------------------------------------------
function findShort(s) {
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}
