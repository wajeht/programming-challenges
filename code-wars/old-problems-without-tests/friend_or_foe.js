// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// my implementatoin

function friend(friends) {
    const array = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            array.push(friends[i]);
        }
    }

    return array;
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));

// best practice
// -------------------------------------------------
function friend(friends) {
    return friends.filter((n) => n.length === 4);
}
