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

// Check whether array only contains values in list
function onlyContainsVals2d(vals, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (vals.indexOf(array[i][j]) === -1)
                return false;
        }
    }
    return true;
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


function areCoordsValid(indices, arr) {
    const [index, ...rest] = indices;
    const isIndValid = isIndexValid(index, arr)

    if (indices.length === 1 && isIndValid) {
        return true;
    } else {
        const nextArray = arr[index];
        return isIndexValid
            && Array.isArray(nextArray)
            && areCoordsValid(rest, nextArray);
    }
}

function isIndexValid(i, arr) {
    return 0 <= i && i < arr.length
}



export { init2dArray, isSquareOfLen, onlyContainsVals2d, areCoordsValid, onlyContains, initXdArray };