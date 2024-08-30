import * as Util from './util.js';

function GameLogic() {
    function isWinner({ token }, brd) {
        const horizontalRows = Util.rotateLeft(brd);
        const diagonals = Util.getDiagonals(brd);
        const allWinPaths = [brd, horizontalRows, diagonals].flat();
    
        return allWinPaths.some(arr => Util.onlyContains([token], arr));
    }

    return { isWinner };
}


export { GameLogic };
