// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
// my implementation

class SmallestIntegerFinder {
    findSmallestInt(args) {
        for (let currentElement of args) {
            let smallestNumber = 0;
            if (smallestNumber < currentElement) {
                smallestNumber = currentElement;
            }
        }

        console.log(smallestNumber);

        return smallestNumber;
    }
}

const sif = new SmallestIntegerFinder();
sif.findSmallestInt([1, 56, 232, 12, 8]);
