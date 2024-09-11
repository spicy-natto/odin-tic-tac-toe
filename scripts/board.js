import * as R from 'ramda';
import * as Util from './util.js';

function Gameboard(sideLength, brd) {

    const initBoard = () => 
        Util.init2dArray(sideLength, sideLength, () => emptyVal);

    const setCell = (x, y, val) => {
        if (Util.areCoordsValid(board, x, y)) {
            const newBrd = R.clone(board);
            newBrd[x][y] = val;
            return Gameboard(sideLength, newBrd);
        }
        return false;
    };

    const isCellEmpty = (x, y, brd) => {
        if (Util.areCoordsValid(brd, x, y)) {
            return brd[x][y] === emptyVal;
        }
    }

    const getBoard = () => R.clone(board);

    const printBoard = () => board.forEach(arr => console.log(...arr));

    // Initialize board
    const board = brd ? brd : initBoard();

    return { getBoard, initBoard, setCell, isCellEmpty, printBoard };
}

export { Gameboard };