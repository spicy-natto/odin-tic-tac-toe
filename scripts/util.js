function init2dArray(x, y, fun) {
    return Array.from(Array(x), () => new Array(y).fill(fun()));
}

// Check whether array is square and has side length of "len"
function isSquareOfLen(len, array) {
    return array
        .filter((arr) => arr.length === len)
        .length === array.length
        && array.length === len;
}

// Check whether array only contains values in list
function onlyContainsVals2d (vals, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (vals.indexOf(array[i][j]) === -1)
                return false;
        }
    }
    return true;
}

export { init2dArray, isSquareOfLen, onlyContainsVals2d };