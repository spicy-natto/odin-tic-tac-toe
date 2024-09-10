import { Gameboard } from '../scripts/board';

test('Initialize board', () => {
    const board = Gameboard(3, ['X', 'O']);
    expect(board.getBoard()).toEqual([['','',''],
                                      ['','',''],
                                      ['','','']]);
});


test('setCell - output', () => {
    const gameBoard = Gameboard(3, ['X', 'O']);
    const newBoard = gameBoard.setCell(1, 2, 'X');
    expect(newBoard.getBoard()).toEqual([['','',''],
                                         ['','','X'],
                                         ['','','']]);
});


test('isCellEmpty - cell is empty', () => {
    const gameBoard = Gameboard(3, ['X', 'O']);
    expect(gameBoard.isCellEmpty(1, 1, gameBoard.getBoard())).toBe(true);
});