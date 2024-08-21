import * as Util from "../scripts/util";

test('Initialize 2x2 grid', () => {
    expect(Util.init2dArray(2,2,() => 0)).toEqual([[0,0],[0,0]]);
});

test('Check if 2x2 grid is square', () => {
    expect(Util.isSquareOfLen(2, Util.init2dArray(2,2,() => 0)))
        .toBe(true);
});

test('Check if 3x4 grid is square', () => {
    expect(Util.isSquareOfLen(2, Util.init2dArray(3,4,() => 0)))
        .toBe(false);
});

test('onlyContainsVals2d - Array only contains X, O, and empty string', () => {
    const array = Util.init2dArray(2,2,() => '');
    array[1][1] = 'O';
    array[0][0] = 'X';
    expect(Util.onlyContainsVals2d(['O','X',''], array)).toBe(true);
});

test('onlyContainsVals2d - Array contains val not on list', () => {
    const array = Util.init2dArray(2,2,() => '');
    array[1][1] = 'O';
    array[0][0] = 'Z';
    expect(Util.onlyContainsVals2d(['O','X',''], array)).toBe(false);
});