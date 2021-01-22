// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// my implementation

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }

    return null;
}

console.log(twoSum([1, 2, 3, 5, 6, 7, 8, 9, 0], 8));

// -----------------------------------------------------------------------------
// best practice
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// -----------------------------------------------------------------------------
// best practice
function twoSum(numbers, target) {
    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let x = numbers[i],
            y = target - x;
        if (seen.has(y)) return [seen.get(y), i];
        seen.set(x, i);
    }
}
