// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.

// did not unserstand the math of this problem
// had to look it up and see how it was done!

// my implementation
function bouncingBall(h, bounce, window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        return 1;
    } else {
        return -1;
    }
}

// best practice
// -----------------------------------------------------------------
function bouncingBall(h, bounce, window) {
    // Qualify the condition that must be met
    const cond = h > 0 && bounce > 0 && bounce < 1 && window < h;
    // Check the condition
    if (cond) {
        // If condition is met, the ball will be seen once going up...
        // And once coming down, as well as the first time its dropped
        return h < window ? -1 : 2 + bouncingBall(h * bounce, bounce, window);
    } else {
        // If condition is not met, per instructions, return -1
        return -1;
    }
}

console.log(bouncingBall(3.0, 0.66, 1.5));
