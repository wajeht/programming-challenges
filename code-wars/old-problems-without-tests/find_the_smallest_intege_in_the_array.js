// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
// my implementation
// i tried to to use the array.sort() function
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestNumber = Number.POSITIVE_INFINITY;

        for (let currentElement of args) {
            if (smallestNumber > currentElement) {
                smallestNumber = currentElement;
            }
        }

        console.log(smallestNumber);

        return smallestNumber;
    }
}

const sif = new SmallestIntegerFinder();
sif.findSmallestInt([1, 56, 232, 12, 8]);

// clever solution
// ----------------------------------------------------------------------
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
