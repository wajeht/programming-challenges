// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
// my implementation

function noSpace(string) {
    let space = ' ';
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] != space) {
            result += string[i];
        }
    }

    return result;
}

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));

// best practice
// ---------------------------------------------------------------------
function noSpace(x) {
    return x.replace(/\s/g, '');
}
