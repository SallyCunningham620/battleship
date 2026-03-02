/**
 * @jest-environment jsdom
 */

import { shipFleet, dragStart, dropShip, resetGame, flip } from './main.js';

 // Mock DOM structure
    const mockBoard = {
        resetBoard: jest.fn(),
        placeShip: jest.fn(() => true),
        hoverArea: jest.fn(),
        renderBoard: jest.fn(),
    }

    global.player = {board: mockBoard}
    global.computer = { board: mockBoard, computerAttack: jest.fn() };
    //global.shipsContainer = document.querySelector('.ships-container');
    global.infoDisplay = document.getElementById('game-message');
    global.turnDisplay = document.getElementById('turn-message');
    global.handleCellClick = jest.fn();
    global.updateMessage = jest.fn();
    global.turnMessage = jest.fn();
    global.placeComputerShipsRandomly = jest.fn();
    global.dragOverNDrop = jest.fn();
    global.dragStart = jest.fn();

    global.isPlayerTurn = true;
    global.gameActive = false;
    //global.isVertical = true;
    global.playerShips = shipFleet();
    global.computerShips = [];


describe('Battleship Game Functions', () => {
    let mockEvent;
    let mockDraggedShip;
    let playerBoard;

    beforeEach(() => {
        jest.clearAllMocks();
        global.isVertical = false;
        global.playerShipsPlaced = [];
        global.gameActive = false;
        global.notDropped = true;

        document.body.innerHTML = `
        <div id="player-board"></div>
        <div id="computer-board"></div>
        <div class="ships-container"></div>
        <button id="flip-button"></button>
        <button id="start-button"></button>
        <button id="reset-button"></button>
        <div id="game-message"></div>
        <div id="turn-message"></div>
    `;

        global.shipsContainer = document.querySelector('.ships-container');
        shipsContainer.innerHTML = `
            <div id="0" class="destroyer-size destroyer horizontal" data-size="2" draggable="true"></div>
            <div id="1" class="submarine-size submarine horizontal" data-size="3" draggable="true"></div>
            <div id="2" class="cruiser-size cruiser horizontal" data-size="3" draggable="true"></div>
            <div id="3" class="battleship-size battleship horizontal" data-size="4" draggable="true"></div>
            <div id="4" class="carrier-size carrier horizontal" data-size="5" draggable="true"></div>
        `;
        mockDraggedShip = document.getElementById('0');
        global.draggedShip = mockDraggedShip;
        global.playerShips = [
            { id: 0, length: 2}, 
            { id: 1, length: 3},
            { id: 2, length: 3},
            { id: 3, length: 4},
            { id: 4, length: 5},
        ];
        global.player = {
            board: {
                placeShip: jest.fn().mockReturnValue(true)
            }
        };
        mockEvent = {
            preventDefault: jest.fn(), target: {
                dataset: {x: '0', y: '0'}
            }
        }
    });

    test('shipFleet() returns a list of 5 ships with correct lengths', () => {
        const fleet = shipFleet();
        expect(fleet.length).toBe(5);
        expect(fleet[0].length).toBe(2); // destroyer
        expect(fleet[4].length).toBe(5); // carrier
    });

    test('resetGame() resets game state variables', () => {
        mockBoard.resetBoard('player-board');
        expect(isPlayerTurn).toBe(true);
        expect(gameActive).toBe(false);
        expect(playerShips.length).toBe(5);
        expect(mockBoard.resetBoard).toHaveBeenCalledWith('player-board');
    });

    test('resetGame() recreates ships in DOM', () => {
        resetGame();
        const shipOptions = shipsContainer.querySelectorAll('div');
        expect(shipOptions.length).toBe(5);
        expect(shipOptions[0].classList.contains('destroyer')).toBe(true);
    });

    test('initializes with horizontal orientation', () => {
        expect(global.isVertical).toBe(false);
    });

    test('flip() toggles isVertical and updates DOM classes', () => {
        let ship = shipsContainer.children[0];
        // First call: Should become vertical
        flip();
        expect(global.isVertical).toBe(true); 
        expect(ship.classList.contains('horizontal')).toBe(false);
        expect(ship.classList.contains('vertical')).toBe(true);

        // Second call: Should become horizontal
        flip();
        expect(global.isVertical).toBe(false);
        expect(ship.classList.contains('vertical')).toBe(false);
        expect(ship.classList.contains('horizontal')).toBe(true);
    });

    test('dragStart() sets global draggedShip', () => {
        const mockEvent = { target: shipsContainer.children[0] };
        dragStart(mockEvent);
        expect(global.draggedShip).toBe(mockEvent.target);
    });

    test('dragStart sets the draggedShip variable', () => {
        const mockEvent = { target: document.getElementById('0') };
        dragStart(mockEvent); 
        expect(global.draggedShip.id).toBe('0');
        //expect(global.notDropped).toBe(false);
    });

     test('should prevent default on drop', () => {
        dropShip(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
    })

    test('dropShip calls player.board.placeShip with correct arguments', () => {
         document.body.innerHTML = `
            <div id="player-board">
                <div class="cell" data-x="1" data-y="1"></div>
            </div>
            <div class="ships-container">
                <div id="0" class="destroyer-size" data-size="2" draggable="true"></div>
            </div>
        `;
        // Setup state
        global.draggedShip = document.getElementById('0');
        global.playerShips = { "0": { name: 'destroyer', length: 2 } }; 
        global.playerShipsPlaced = []; 
        global.notDropped = true;
        global.isVertical = false;

        mockBoard.placeShip.mockReturnValue(true);

        const mockEvent = { 
            target: document.querySelector('.cell'), 
            preventDefault: jest.fn() 
        };
        // Execute drop
        dropShip(mockEvent);
        expect(player.board.placeShip).toHaveBeenCalled();
        expect(global.player.board.placeShip).toHaveBeenCalledWith(
            'player-board', expect.any(Object), 1, 1, false
        );
    });
});

