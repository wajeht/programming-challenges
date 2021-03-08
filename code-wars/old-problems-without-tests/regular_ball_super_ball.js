// https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
// my implementation

class Ball {
    constructor(balltype) {
        if (balltype) {
            this.balltype = balltype;
        } else {
            this.balltype = 'regular';
        }
    }
}

const b = new Ball();
console.log(b.balltype);

// best practice
// -------------------------------------------------------------------------
class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType;
    }
}

// best practice
// -------------------------------------------------------------------------
var Ball = function (ballType) {
    this.ballType = ballType || 'regular';
};
