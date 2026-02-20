import Gameboard from './gameboard.js';

// src/player.js
class Player {
    constructor(name, isComputer = false) {
        this.name = name;
        this.board = new Gameboard();
        this.isComputer = isComputer;
        this.usedAttacks = new Set();
    }
/*
    // For a human player
    attack(enemyGameboard, x, y) {
        console.log(enemyGameboard);
        console.log(enemyGameboard.receiveAttack());
        return enemyGameboard.receiveAttack(x, y);
    }

    // For the computer player, random attack
    randomAttack(enemyGameboard) {
        let x, y, attackStr;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            attackStr = `${x},${y}`;
        } while (this.usedAttacks.has(attackStr));

        this.usedAttacks.add(attackStr);
        return enemyGameboard.receiveAttack(x, y);
    }*/
}

export default Player;
