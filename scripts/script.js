import * as Util from './util.js';
import * as GameController from './game-controller.js';

const domController = (function() {
    const gameBoardDiv = document.querySelector('.game-board');
    const cellArray = generateCellArr(3);
    setDomGameBoard(gameBoardDiv, cellArray);
    setCellListeners(cellArray);
    const statusMsg = document.querySelector('.game-status');

    const gameController = GameController.GameController();


    function generateCellArr(sideLength) {
        return Util.init2dArray(sideLength, sideLength, createCell);
    }

    function createCell() {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('gameCell');
        return button;
    }

    function setDomGameBoard(div, cellArr) {
        div.replaceChildren(...cellArr.flat());
    }

    // todo make more flexible based on player 1 / player 2 info
    function createStatusMsg(status) {
        let msg;
        switch(status) {
            case 'X':
                msg = 'Player 1 wins!';
                break;
            case 'O':
                msg = 'Player 2 wins!';
                break;
            case 'TIE':
                msg = 'Game is tied!';
                break;
            case 'IN PROGRESS':
                msg = 'Game is still in progress!';
                break;
            default:
                msg = 'Error';
        }

        return msg;
    }

    // Todo - figure out consistent x / y notation
    function setCellListeners(cellArr) {
        cellArr.forEach((row, rowInd) => {
            row.forEach((el, colInd) => {
                el.addEventListener("click", () => {
                    gameController.move(rowInd, colInd);
                    el.innerText = gameController.getCell(rowInd, colInd);
                    statusMsg.innerText = 
                        createStatusMsg(gameController.getGameStatus());
                })
            })
        });
    }
})();