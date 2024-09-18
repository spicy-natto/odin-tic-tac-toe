import { Gameboard } from '../scripts/board';

test('Initialize board', () => {
    const board = Gameboard(3);
    expect(board.getBoard()).toEqual([['','',''],
                                      ['','',''],
                                      ['','','']]);
});


test('setCell - output', () => {
    const gameBoard = Gameboard(3);
    const newBoard = gameBoard.setCell(1, 2, 'X');
    expect(newBoard.getBoard()).toEqual([['','',''],
                                         ['','','X'],
                                         ['','','']]);
});


test('isCellEmpty - cell should be empty', () => {
    const gameBoard = Gameboard(3);
    expect(gameBoard.isCellEmpty(1, 1, gameBoard)).toBe(true);
});

test('getCell - output', () => {
    const gameBoard = Gameboard(3);
    const newBoard = gameBoard.setCell(1, 2, 'X');
    expect(newBoard.getCell(1,2)).toEqual('X');
});