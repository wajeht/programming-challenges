// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
// my implementation
// aparently, i am bad at object/class
// dind't finished it
// got done 50%
// had to look it up

class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = () => {
            return this.name;
        };
    }
}

function declareWinner(fighter1, fighter2, firstAttatch) {
    let result = 0;

    if (firstAttatch === fighter1.toString()) {
        console.log(`${fighter1.name} is here`);

        while (fighter2.health <= 0) {
            console.log('one', result);
            fighter2.health = fighter2.health - fighter1.damagePerAttack;
        }
    } else if (firstAttatch === fighter2.toString()) {
        console.log(`${fighter1.name} is here`);

        while (fighter1.health <= 0) {
            fighter1.health = fighter1.health - fighter2.damagePerAttack;
        }
    }

    return result;
}

const one = new Fighter('lew', 10, 2);
const two = new Fighter('harry', 5, 4);

console.log(declareWinner(one, two, two.toString()));

// best practice
// -----------------------------------------------------------------------------------
function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;
    else if (fighter1.health <= 0) return fighter2.name;
    else return fighter1.name;
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    };
}
