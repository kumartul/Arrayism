const clean = require('../../src/clean.js');

test('cleans the array by removing all the falsy values', () => {
    expect(clean([1, 2, "", undefined, "Bill", false, 0, true, null, 4224.5, NaN])).toEqual([1, 2, "Bill", true, 4224.5]);
});