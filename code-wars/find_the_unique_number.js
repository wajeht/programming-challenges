// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// my implementation
// took less than 15 minutes

function findUniq(array) {
    const object = {};
    let uniqueNumber = undefined;

    // push every element in array into object
    // if there are more than 1 same elemnt, increast it counts
    for (let number of array) {
        if (!object[number]) {
            object[number] = 1;
        } else {
            object[number] += 1;
        }
    }

    // iterate over the object
    // if the value is one, then the unique number is that
    for (let key in object) {
        if (object[key] === 1) {
            uniqueNumber = Number(key);
        }
    }

    console.log({ object: object, uniqueNumber: uniqueNumber });
    return uniqueNumber;
}

console.log(findUniq([0, 0, 0.55, 0, 0]));

// best practice
// ----------------------------------------------------------------------------
function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}
