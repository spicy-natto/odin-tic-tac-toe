import * as R from 'ramda';
import * as Util from './util.js';

function Gameboard() {
    const sideLength = 3;
    const allowedCellVals = ['X', 'O', ''];
    const initBoard = () => Util.init2dArray(sideLength, sideLength, () => '');
    let board = initBoard();

    const save = (brd) => {
        if (isBoardValid(brd)) {
            board = brd;
            return R.clone(board);
        }
        return false;
    };

    const setCell = (x, y, val) => brd => {
        if (Util.areCoordsValid(x, y, brd)) {
            const newBrd = R.clone(brd);
            newBrd[x][y] = val;
            return newBrd;
        }
        return false;
    };

    const getBoard = () => R.clone(board);

    const isBoardValid = (brd) => {
        return Array.isArray(brd)
        && Util.isSquareOfLen(sideLength, brd)
        && Util.onlyContainsVals2d(brd);
    };

    return { save, getBoard, initBoard, setCell };
}

export { Gameboard };