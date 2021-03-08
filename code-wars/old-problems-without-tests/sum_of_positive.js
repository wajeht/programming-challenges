// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// my implementation
// took less than 20 minutes
function positiveSum(array) {
    // console.log('userInput', array);
    if (array.length == 0) {
        return 0;
    } else {
        const positiveArray = [];

        // push non negative into positiveArray
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                positiveArray.push(array[i]);
            }
        }

        // if there are no elemnt, return zero
        if (positiveArray.length == 0) {
            return 0;
        }

        // console.log('positiveArray', positiveArray);

        return positiveArray.reduce((currentValue, currentInde, Array) => {
            return (currentValue += currentInde);
        });
    }
}

console.log(positiveSum([-1, -2, -3, -4, -5]));

// best practice
// ----------------------------------------------------------------------------
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        // setup loop to go through array of given length
        if (arr[i] > 0) {
            // if arr[i] is greater than zero
            total += arr[i]; // add arr[i] to total
        }
    }
    return total; // return total
}

// best practice
// ----------------------------------------------------------------------------
function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
