import * as Util from './util.js';
import * as GameController from './game-controller.js';
import { Gameboard } from './board.js';

const domController = (function() {

    // Cache DOM
    const gameBoardDiv = document.querySelector('.game-board');
    const statusMsg = document.querySelector('.game-status');
    const restartBtn = document.querySelector('.restart-button');
    const cellArray = generateCellArr(3);
    setDomGameBoard(gameBoardDiv, cellArray);

    // Set event listeners
    setCellListeners(cellArray);
    restartBtn.addEventListener("click", restartGame);

    const gameController = GameController.GameController();


    function restartGame()  {
        gameController.initialize();
        syncBoard(cellArray, gameController.getBoard());
        statusMsg.innerText = 
        createStatusMsg(gameController.getGameStatus());
    }

    function syncBoard(cellArr, boardArr) {
        cellArr.forEach((row, rowInd) => {
            row.forEach((el, colInd) => {
                el.innerText = boardArr[rowInd][colInd];
            })
        });
    }

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
                msg = 'PLAYER 1 WINS!';
                break;
            case 'O':
                msg = 'PLAYER 2 WINS!';
                break;
            case 'TIE':
                msg = 'TIE!';
                break;
            case 'IN PROGRESS':
                if(gameController.getActivePlayer().token === 'X') {
                    msg = 'PLAYER 1 IS UP!'
                } else {
                    msg = 'PLAYER 2 IS UP!'
                }
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