// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/solutions
// my implementation
// aparently, my way of think was wrong, it didn't accept my codes
//
const DEFAULT_PROPERTIES = {
    color: ['white', 'yellow', 'puruple', 'red'],
    getRandomColor: () => {
        const randomNumber = Math.floor(Math.random() * 4);
        return DEFAULT_PROPERTIES.color[randomNumber];
    },
};

class Ghost {
    constructor() {
        this.color = DEFAULT_PROPERTIES.getRandomColor();
        console.log(this.color);
    }
}

const g = new Ghost();
console.log(g.color);

// best practice
// ---------------------------------------------------------------------
var Ghost = function () {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
};
