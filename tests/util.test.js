import * as Util from "../scripts/util";

test('Initialize 2x2 grid', () => {
    expect(Util.init2dArray(2,2,() => 0)).toEqual([[0,0],[0,0]]);
});

test('InitXdArray - initialize 2x2 grid', () => {
    expect(Util.initXdArray(() => 0, 2, 2)).toEqual([[0,0],[0,0]]);
});

test('InitXdArray - initialize 2x2x3 grid', () => {
    expect(Util.initXdArray(() => 0, 2, 3, 2)).toEqual([[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]]]);
});


test('Check if 2x2 grid is square', () => {
    expect(Util.isSquareOfLen(2, Util.init2dArray(2,2,() => 0)))
        .toBe(true);
});

test('Check if 3x4 grid is square', () => {
    expect(Util.isSquareOfLen(2, Util.init2dArray(3,4,() => 0)))
        .toBe(false);
});

test('onlyContains - Array only contains X, O, and empty string', () => {
    const array = Util.init2dArray(2,2,() => '');
    array[1][1] = 'O';
    array[0][0] = 'X';
    expect(Util.onlyContains(['O','X',''], array)).toBe(true);
});

test('onlyContains - Array contains val not on list', () => {
    const array = Util.init2dArray(2,2,() => '');
    array[1][1] = 'O';
    array[0][0] = 'Z';
    expect(Util.onlyContains(['O','X',''], array)).toBe(false);
});

test('areCoordsValid - valid coordinates', () => {
    expect(Util.areCoordsValid([1, 1], [['',''],['','']])).toBe(true);
});

test('areCoordsValid - invalid coordinates', () => {
    expect(Util.areCoordsValid([1, 2] ,[['',''],['','']])).toBe(false);
});

test('rotateLeft - square', () => {
    const arr = [[1,2,3],
                 [4,5,6],
                 [7,8,0]];

    const rotatedArr = [[1,4,7],
                        [2,5,8],
                        [3,6,0]];

    expect(Util.rotateLeft(arr)).toEqual(rotatedArr);
});

test('rotateLeft - rectangle', () => {
    const arr = [[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 [9,10,11,12]];

    const rotatedArr = [[1, 5,  9],
                        [2, 6, 10],
                        [3, 7, 11],
                        [4, 8, 12]];

    expect(Util.rotateLeft(arr)).toEqual(rotatedArr);
});