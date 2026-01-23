import Ship from '../src/ship.js';

describe('Ship', () => {
    let ship;

    beforeEach(() => {
        ship = Ship(3);
    })

    test('should have the correct length', () => {
        expect(ship.length).toBe(3);
    });
    test('number of times hit', () => {
        ship.hit();
        expect(ship.getHits()).toBe(1);
    });
    test('should not be sunk initially', () => {
        expect(ship.isSunk()).toBe(false);
    })
    test('should be sunk when hits equal length', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
    test('should remain sunk when hits more than length', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
})