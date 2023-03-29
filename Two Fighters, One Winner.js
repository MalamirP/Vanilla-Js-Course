function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    let attacker2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    if (attacker1 < attacker2) {
        return fighter2.name;
    } else if (attacker2 < attacker1) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}