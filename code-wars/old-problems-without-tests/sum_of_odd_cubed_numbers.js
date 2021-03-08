// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

function cubeOdd(array) {
    let sum = 0;
    const cubedArray = [];

    // loop through the input array and filter out and push into cubedArray
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element % 2 != 0) {
            cubedArray.push(element * element * element);
        }
    }

    // sum it up
    if (cubedArray.includes(NaN)) {
        sum = undefined;
    } else {
        for (let i = 0; i < cubedArray.length; i++) {
            sum += cubedArray[i];
        }
    }

    return sum;
}

console.log(cubeOdd(['a', 12, 9, 'z', 42]));

// best practice
// --------------------------------------------------------------------------
function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var cubed = arr[i] * arr[i] * arr[i];
        if (isNaN(cubed)) return undefined;
        if (cubed % 2 != 0) sum += cubed;
    }
    return sum;
}

// best practice
// --------------------------------------------------------------------------
function cubeOdd(arr) {
    arr = arr.filter((num) => {
        return num % 2 != 0;
    });
    arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
    return isNaN(arr) ? undefined : arr;
}
