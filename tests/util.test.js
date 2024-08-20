import { init2dArray } from "../scripts/util";

test('Initialize 2x2 grid', () => {
    expect(init2dArray(2,2,() => 0)).toEqual([[0,0],[0,0]]);
});