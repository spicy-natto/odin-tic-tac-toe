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
function isSquareOfLen(len, array) {
    return array
        .filter((arr) => arr.length === len)
        .length === array.length
        && array.length === len;
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

export { init2dArray, isSquareOfLen, areCoordsValid, onlyContains, initXdArray, rotateLeft };