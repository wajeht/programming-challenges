// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/
// my implementation

seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function expression(number, operation) {
    if (!operation) return number;
    return operation(number);
}

function zero(operation) {
    return expression(0, operation);
}
function one(operation) {
    return expression(1, operation);
}
function two(operation) {
    return expression(2, operation);
}
function three(operation) {
    return expression(3, operation);
}
function four(operation) {
    return expression(4, operation);
}
function five(operation) {
    return expression(5, operation);
}
function six(operation) {
    return expression(6, operation);
}
function seven(operation) {
    return expression(7, operation);
}
function eight(operation) {
    return expression(8, operation);
}
function nine(operation) {
    return expression(9, operation);
}

function plus(x) {
    return function (y) {
        return y + x;
    };
}
function minus(x) {
    return function (y) {
        return y - x;
    };
}
function times(x) {
    return function (y) {
        //console.log(y);
        return y * x;
    };
}
function dividedBy(x) {
    return function (y) {
        return Math.floor(y / x);
    };
}

// -----------------------------------------------------------------------------------
// best practice
var n = function (digit) {
    return function (op) {
        return op ? op(digit) : digit;
    };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
    return function (l) {
        return l + r;
    };
}
function minus(r) {
    return function (l) {
        return l - r;
    };
}
function times(r) {
    return function (l) {
        return l * r;
    };
}
function dividedBy(r) {
    return function (l) {
        return l / r;
    };
}
