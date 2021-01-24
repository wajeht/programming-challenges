// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
// my implementation
// i was able to write recursive code 
// but couldn't figure out how to increa count
function persistence(num) {
    // if input is one integer
    if (num.toString().length === 1) {
        return 0;
    } else {
        let array = num.toString().split('');

        for (let i = 0; i < array.length; i++) {
            array.splice(i, 1, parseInt(array[i]));
        }

        array = array.reduce((acuu, curr) => {
            return (acuu *= curr);
        });

        console.log({ array: array });

        return persistence(array);
    }
}

console.log(persistence(39));

// ------------------------------------------------------------------------------
// bestter solution
function persistence(num) {
    var arr = num.toString().split('');
    var count = 0;
    var product;

    while (arr.length > 1) {
        product = arr.reduce(function (a, b) {
            return a * b;
        });
        count++;
        arr = product.toString().split('');
    }
    return count;
}
