import * as GameController from '../scripts/game-controller';

describe('initialize', () => {

    const controller = GameController.GameController();

    test('Board is initialized', () => {    
        expect(controller.getBoard()).toEqual([['','',''],
                                               ['','',''],
                                               ['','','']]);
    });

    test('Game status is IN PROGRESS', () => {    
        expect(controller.getGameStatus()).toBe('IN PROGRESS');
    });

    test('player1 is active', () => {    
        expect(controller.getActivePlayer().token).toBe('X');
    });
    
}); 
