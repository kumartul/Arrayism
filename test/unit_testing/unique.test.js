const unique = require('../../src/unique.js');

test('returns the unique values from an array', () => {
    expect(unique([1, 2, 1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
});