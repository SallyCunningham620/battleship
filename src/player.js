import Gameboard from './gameboard.js';

// src/player.js
class Player {
    constructor(name, isComputer = false) {
        this.name = name;
        this.board = new Gameboard();
        this.isComputer = isComputer;
        this.usedAttacks = new Set();
    }

    computerAttack(playerShips) {
        let cell
        do {
            let randomComputerGo = Math.floor(Math.random() * 100)
            const allPlayerCells = document.querySelectorAll('#player-board .cell');
            cell = allPlayerCells[randomComputerGo];
            console.log(cell); }
        while ( cell.classList.contains('hit') || cell.classList.contains('miss')
        ) 
        if (
            cell.classList.contains('taken')
        ) {
            let classes = Array.from(cell.classList);
            console.log(classes);
            let shipName = classes.find(c => c !== 'cell' && c !== 'taken' && c !== 'hit');
            console.log(shipName);
            let ship = playerShips.find(s => s.name === shipName);
            console.log(ship); 
    
            return { ship, cell, shipName};  
        } else {
            console.log('2');
            cell.classList.add('miss');
            console.log(cell);
            return { ship: null, cell };
        }
    }

    playerAttack(e, computerShips) {
        if (e.target.classList.contains('taken') && 
            e.target.classList.contains('hit') || 
            e.target.classList.contains('miss')) {
            console.log('1');
            return {alreadyAttacked: true};
        } else if (e.target.classList.contains('taken') && !e.target.classList.contains('hit')) {
            let shipName = Array.from(e.target.classList).find(ship =>
                ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'].includes(ship)
            );
            console.log(shipName);
            // Find the corresponding Ship instance from your computerShips array
            let ship = computerShips.find(s => s.name === shipName);
    
            return { ship, shipName, alreadyAttacked: false};  
        } else {
            console.log('2');
            e.target.classList.add('miss');
            return { ship: null, alreadyAttacked: false };
        }
    }
}
export default Player;
