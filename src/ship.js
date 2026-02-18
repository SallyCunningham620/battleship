// src/ship.js
class Ship {
    constructor(name, length) {
        this.name = name;
        console.log(name);
        this.length = length;
        this.hits = 0;
    }

    hit() {
        if (!this.isSunk()) {
            this.hits++;
            this.isSunk();
        }
    }

    isSunk() {
        if(this.hits >= this.length){
            this.sunk = true
        }
        return this.isSunk;
    }
}

export default Ship;
