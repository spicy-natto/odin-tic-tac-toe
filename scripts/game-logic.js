import { all } from 'ramda';
import * as Util from './util.js';

function GameLogic() {
    function isWinner({ token }, brd) {
        const arrBoard = brd.getBoard();
        const horizontalRows = Util.rotateLeft(arrBoard);
        const diagonals = Util.getDiagonals(arrBoard);
        const allWinPaths = [arrBoard, horizontalRows, diagonals].flat();
    
        return allWinPaths.some(arr => Util.onlyContains([token], arr));
    };

    function isFull(playerVals, brd) {
         return Util.onlyContains(playerVals, brd.getBoard());
    };

    return { isWinner, isFull };
}


export { GameLogic };
