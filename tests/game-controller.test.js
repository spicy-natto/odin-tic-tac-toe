import * as GameController from '../scripts/game-controller';

let controller;

describe('Initialize board', () => {

    beforeAll(() => {
        controller = GameController.GameController();
    }) ;

    test('Board is initialized', () => {    
        expect(controller.getBoard()).toEqual([['','',''],
                                               ['','',''],
                                               ['','','']]);
    });

    test('Game status should be IN PROGRESS', () => {    
        expect(controller.getGameStatus()).toBe('IN PROGRESS');
    });

    test('Player1 is active', () => {    
        expect(controller.getActivePlayer().token).toBe('X');
    });
    
}); 

describe('Move', () => {

    describe('One move', () => {
        beforeAll(() => {
            controller = GameController.GameController();
            controller.move(1, 1);
        }) ;

        test('Board should contain X token', () => {    
            expect(controller.getBoard()).toEqual([['','' ,''],
                                                   ['','X',''],
                                                   ['','' ,'']]);
        });
    
        test('Game status should be IN PROGRESS', () => {    
            expect(controller.getGameStatus()).toBe('IN PROGRESS');
        });
    
        test('Player2 should be active', () => {    
            expect(controller.getActivePlayer().token).toBe('O');
        });
    });

    describe('Two moves', () => {
        beforeAll(() => {
            controller = GameController.GameController();
            controller.move(1, 1);
            controller.move(0, 0);
        }) ;

        test('Board should contain X and O token', () => {    
            expect(controller.getBoard()).toEqual([['O','' ,''],
                                                   ['' ,'X',''],
                                                   ['' ,'' ,'']]);
        });
    
        test('Game status should be IN PROGRESS', () => {    
            expect(controller.getGameStatus()).toBe('IN PROGRESS');
        });
    
        test('Player1 should be active', () => {    
            expect(controller.getActivePlayer().token).toBe('X');
        });
    });

});


describe('Win condition', () => {
    beforeAll(() => {
        controller = GameController.GameController();
        controller.move(1, 1);
        controller.move(0, 0);
        controller.move(0, 1);
        controller.move(2, 2);
        controller.move(2, 1);
    }) ;

    test('Board should contain X token', () => {    
        expect(controller.getBoard()).toEqual([ ['O','X',''],
                                                ['' ,'X',''],
                                                ['' ,'X','O']]);
    });

    test('Game status should be O', () => {    
        expect(controller.getGameStatus()).toBe('X');
    });
});

describe('Tie condition', () => {
    beforeAll(() => {
        controller = GameController.GameController();
        controller.move(1, 1);
        controller.move(0, 0);
        controller.move(0, 1);
        controller.move(1, 2);
        controller.move(1, 0);
        controller.move(2, 1);
        controller.move(2, 0);
        controller.move(0, 2);
        controller.move(2, 2);
    }) ;

    test('Board should contain X token', () => {    
        expect(controller.getBoard()).toEqual([ ['O','X','O'],
                                                ['X','X','O'],
                                                ['X','O','X']]);
    });

    test('Game status should be TIE', () => {    
        expect(controller.getGameStatus()).toBe('TIE');
    });
});

describe('Set player name', () => {

    test('Player1 should have name "Jeff"', () => {
        controller.setPlayerName('player1', 'JEFF');    
        expect(controller.getPlayers().player1.name === 'JEFF');
    });

    test('Player2 should have name "Marta"', () => {
        controller.setPlayerName('player2', 'MARTA');    
        expect(controller.getPlayers().player1.name === 'MARTA');
    });
});