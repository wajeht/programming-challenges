// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// my implementation
function getCount(string) {
    var vowels = 'aeiou';
    var count = 0;

    var array = [];

    for (i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                count++;
                array.push(string[i]);
                console.log('same at ->', string[i]);
            }
        }
    }

    return count;
}

console.log(getCount('hello'));

// best practice
function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
