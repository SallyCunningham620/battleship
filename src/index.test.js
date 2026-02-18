import gameFunction from "../src/index.js";

describe('Game Loop Logic', () => {
    beforeEach(() => {
        game = gameFunction();
        game.startGame();

    });
    test.skip('should switch turns after valid attack', () => {
        game.gameLoop(0, 0);
        expect(game.currentPlayer.name).toBe("Computer");
    });

    test.skip('should not switch turns on invalid attack', () =>{
        game.gameLoop(0, 0);
        game.gameLoop(0, 0); //invalid 
        expect(game.currentPlayer.name).toBe("Player 1");
    });

    test.skip('should end game when all ships are sunk', () => {
         game.computer.gameboard.allShipsSunk = jest.fn().mockReturnValue(true);
        game.gameLoop(2, 4);
        game.gameLoop(0, 0);
        expect(game.computer.gameboard.allShipsSunk()).toBe(true);
        expect(game.getIsGameOver()).toBe(true);
    })
})