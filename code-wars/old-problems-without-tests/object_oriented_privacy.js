// https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
// my implementation
// i did not understnad the question
// i know how to impliemnt it i just don't know what the math was

class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    isWorthIt() {
        const totalWeight = this.crew * 1.5;

        console.log('totalWeight:', totalWeight, 'draft:', this.draft);

        if (this.draft > 20 && totalWeight >= this.draft) {
            return true;
        } else {
            return false;
        }
    }
}

// best practice 
// ------------------------------------------------------------------------
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20
  }