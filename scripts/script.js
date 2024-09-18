import * as Util from './util.js';
import * as GameController from './game-controller.js';

const domController = (function() {
    const gameBoardDiv = document.querySelector('.game-board');
    const cellArray = generateCellArr(3);
    setDomGameBoard(gameBoardDiv, cellArray);
    setCellListeners(cellArray);

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

    // Todo - figure out consistent x / y notation
    function setCellListeners(cellArr) {
        cellArr.forEach((row, rowInd) => {
            row.forEach((el, colInd) => {
                el.addEventListener("click", () => {
                    gameController.move(rowInd, colInd);
                    el.innerText = gameController.getCell(rowInd, colInd);
                })
            })
        });
    }
})();