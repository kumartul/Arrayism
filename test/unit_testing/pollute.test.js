const pollute = require('../../src/pollute.js');

test('pollutes the array by removing all the truthy values', () => {
    expect(pollute([true, 1, 0, false, "Atul", "", null])).toEqual([0, false, "", null]);
});