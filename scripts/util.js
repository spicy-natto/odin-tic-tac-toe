import { set } from "ramda";

function init2dArray(x, y, fun) {
    return Array.from(Array(x), () => new Array(y).fill(fun()));
}

function initXdArray(fun) {
    const [, ...rest] = arguments;

    return (function nestedInit() {
        if (arguments.length == 0)
            return fun;
        else {
            const [dim, ...rest] = arguments;
            return () => Array.from(Array(dim), nestedInit(...rest));
        }
    })(...rest)();    
}

// Check whether array is square and has side length of "len"
function isSquare(array) {
    return array
        .filter((arr) => arr.length === array.length)
        .length === array.length;
}

function onlyContains(validList, array) {

    const validSet = new Set();
    validList.forEach(el => validSet.add(el));

    return (function nestedContains(array) {
        if (array.length == 0) {
            return true
        } else {
            const [currVal, ...rest] = array;
            if (!Array.isArray(currVal))
                return validSet.has(currVal) && nestedContains(rest);
            else 
                return nestedContains(currVal) && nestedContains(rest);
        }
    })(array);

}

function areCoordsValid(arr) {
    const args = Array.from(arguments);
    const [, index, ...rest] = args;
    const isIndValid = isIndexValid(index, arr);

    if (rest.length === 0 && isIndValid) {
        return true;
    } else {
        const nextArray = arr[index];
        return isIndexValid
            && Array.isArray(nextArray)
            && areCoordsValid(nextArray, ...rest);
    }
}

function isIndexValid(i, arr) {
    return 0 <= i && i < arr.length
}

function rotateLeft(arr) {
    const newArr = new Array();
    arr.forEach(x => {
        x.forEach((x, ind) => {
            if (!Array.isArray(newArr[ind]))
                newArr[ind] = new Array();
            newArr[ind].push(x);
        })
    });
    return newArr;
}

function getDiagonals(arr) {
    if (isSquare(arr)) {
        const diagArr = Array.from(Array(2), () => Array());
        arr.forEach((rowArr, ind) => {
            diagArr[0].push(rowArr[ind]);
            diagArr[1].push(rowArr[arr.length - ind - 1])
        })
        return diagArr;
    } else {
        return false;
    }
}


export { init2dArray, isSquare, areCoordsValid, onlyContains, initXdArray, rotateLeft, getDiagonals };