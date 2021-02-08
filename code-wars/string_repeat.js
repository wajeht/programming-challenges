// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascriptv
// my implementation

function repeatStr(number, string) {
    return string.repeat(number);
}

console.log(repeatStr(3, 'hello'));

// best practice
// --------------------------------------------------------------------------

function repeatStr(n, s) {
    var str = '';
    for (var i = 0; i < n; i++) str += s;
    return str;
}
