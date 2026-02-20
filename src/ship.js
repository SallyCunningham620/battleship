// src/ship.js
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if (!this.sunk) {
            this.hits++;
            this.isSunk();
        }
    }

    isSunk() {
        if(this.hits >= this.length){
            this.sunk = true
        }
        return this.sunk;
    }
}

export default Ship;
