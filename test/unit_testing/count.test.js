const count = require('../../src/count.js');

test('counts the number of occurrences of en element in the array', () => {
    expect(count([1, 2, 3, 2, 5, 2, 5], 2)).toBe(3);
});