// https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript
// my implementation
// idk how to figure it out
// so i just looked it up

function disemvowel(string) {
    const vowel = 'aeiouAEIOU';
    let str = string;
    let array = [];

    for (let i = 0; i < vowel.length; i++) {
        str = str.replace(vowel[i], '');
        console.log(str);
    }

    return str;
}

console.log(disemvowel('This website is for losers LOL!'));

// best practice
// -------------------------------------------------------------------------------
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }
