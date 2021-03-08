// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
// my implementation

// function songDecoder(song) {
//     let string = '';
//     const wub = 'WUB';
//     let result = '';

//     for (let i = 0; i < song.length; i++) {
//         string += song[i];
//         if (song[i] === ' ') {
//             string += wub;
//         }
//     }

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] != ' ') {
//             result += string[i];
//         }
//     }

//     return result;
// }

// console.log(songDecoder('WE ARE THE CHAMPIONS MY FRIEND'));

function songDecoder(song) {
    console.log({ input: song });

    let array = song.split('');
    let result = undefined;
    let wup = undefined;

    // check to see if next to index are "WUB", if, then  remove and repalce with white psace
    for (let i = 0; i < array.length; i++) {
        wup = array[i] + array[i + 1] + array[i + 2] === 'WUB' ? true : false;

        if (wup) {
            array.splice(i, 3, ' ');
        }
    }

    console.log({ mid: array.join('') });

    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];
        const nextElement = array[i + 1];

        if (currentElement == ' ' && nextElement === ' ') {
            array.splice(i + 1, 1, '');
        }
    }

    result = array.join('').trim();

    console.log({ result: result });
    console.log(' ');

    return result;
}

songDecoder('AWUBWUBWUBBWUBWUBWUBC');
