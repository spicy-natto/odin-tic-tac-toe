function init2dArray(x, y, fun) {
    return Array.from(Array(x), () => new Array(y).fill(fun()));
}

export { init2dArray };