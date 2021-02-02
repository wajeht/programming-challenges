// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// my implementation
// done under 15 minutes
// getting better
// 7 kyu

const highAndLow = (numbers) => {
    const stringArray = numbers.split(' ');
    const numArray = [];
    let result = '';

    // convert every element from stringArray into int
    // and push it back to numArray
    stringArray.forEach((element) => {
        numArray.push(parseInt(element));
    });

    // now sort the numArray
    numArray.sort((a, b) => {
        return a - b;
    });

    result = `${numArray[numArray.length - 1]} ${numArray[0]}`;

    return result;
};

console.log(highAndLow('1 5 4 3 2'));

// best practice
// ---------------------------------------------------------------------------
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// best practice
// ---------------------------------------------------------------------------
function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
