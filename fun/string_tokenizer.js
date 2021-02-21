// this is lab5 from school 
// just watching school lecture videos which remined me of hwo to do it

let greeting = 'hello world good bye';
const array = [];
let spaceIndex = undefined;
let token = undefined;

while (true) {
    // index of sapce
    spaceIndex = greeting.indexOf(' ');

    if (spaceIndex === -1) {
        array.push(greeting);
        break;
    }

    // word -> from 0 to index of space
    token = greeting.substring(0, spaceIndex);
    array.push(token);

    // resign the greeting so it subtract the first word
    // you gotta push +1 because of
    // " world good bye"
    // with +1 it will be
    // "world good bye" without the space
    greeting = greeting.substring(spaceIndex + 1);

    // console.log({ token: token, greeting: greeting, length: length });
}

console.log({string: "hello world good bye"});
console.table(array);

