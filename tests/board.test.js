import * as Board from '../scripts/board';

test('Initialize board', () => {
    const board = Board.Gameboard();
    expect(board.getBoard()).toEqual([['','',''],
                                      ['','',''],
                                      ['','','']]);
});