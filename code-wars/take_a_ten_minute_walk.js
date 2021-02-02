// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// my implementatoin
// i did not understand this problems
// so i had to look it up

const isValidWalk = (walk) => {
    console.log(walk);
    let count = 0;

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] !== walk[i + 1]) {
            count++;
        }
    }

    console.log(count);
    console.log(count === 10);
    return count === 10;
};

console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));

// ----------------------------------------------------------------------------
// best practice
function isValidWalk(walk) {
    let ns = 0,
        we = 0;
    for (let dir of walk) {
        if (dir == 'n') ns += 1;
        if (dir == 's') ns -= 1;
        if (dir == 'w') we += 1;
        if (dir == 'e') we -= 1;
    }

    return walk.length == 10 && ns === 0 && we === 0;
}
