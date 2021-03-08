// https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript
// my implementation
class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        // console.log('number', this.number, 'guess', n);

        if (this.lives === 0) {
            throw new Error('You have no more life');
        }

        if (n === this.number) {
            return true;
        } else {
            this.lives--;
        }

        //console.log('remaining life', this.lives);
        return false;
    }
}

const g = new Guesser(10, 2);

g.guess(1);
g.guess(1);
g.guess(1);

// best practice
// --------------------------------------------------------------
class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) throw Error;
        this.lives--;
        return n === this.number;
    }
}
