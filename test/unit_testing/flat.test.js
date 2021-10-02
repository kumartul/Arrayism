const flatten = require('../../src/flat.js');

test('flattens the array completely', () => {
    expect(flatten([1, 2, [3, 4, [5, 6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7])
});

test('flattens the array upto 1st level', () => {
    expect(flatten([1, 2, [3, 4, [5, 6, 7]]], 1)).toEqual([1, 2, 3, 4, [5, 6, 7]])
});