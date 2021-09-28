const getPiece = require('../../src/getpiece.js');

test('returns a piece from the array', () => {
    expect(getPiece([1, 2, 3, 4, 5], 2, 4)).toEqual([2, 3, 4]); 
});