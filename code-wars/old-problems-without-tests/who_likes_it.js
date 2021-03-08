// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// my implementation
// started at 12:00, finished at 1:00
// took 1 hours

function likes(names) {
    let result = '';
    let lastComa = '';
    let charArray = '';
    let count = '';

    if (names.length <= 0) {
        result = 'no one likes this';
    }

    if (names.length == 1) {
        result = names[names.length - 1] + ' likes this';
    }

    if (names.length == 2) {
        result = names[0] + ' and ' + names[1] + ' like this';
    }

    if (names.length === 3) {
        result = names.join(', '); // "peter", "jacob", "john"
        charArray = result.split(''); // ["p", "e", "t", "r", ",", etc...]
        lastComa = charArray.lastIndexOf(','); // 12
        charArray.splice(lastComa, 1, ' and');
        result = charArray.join('') + ' like this';
    }

    if (names.length > 3) {
        for (let i = 2; i < names.length; i++) {
            count++;
        }

        result = names[0] + ', ' + names[1] + ' and ' + count + ' others like this';
    }

    return result;
}

console.log(likes(['peter', 'jacob', 'kyaw', 'ted', 'Yanlon']));

// --------------------------------------------------------------------------------
// better implementatoin
function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return names[0] + ' likes this';
            break;
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
            break;
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            break;
        default:
            return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}
