const dimension = require('../../src/dimension.js');

test('returns the number of dimensions of an array', () => {
    expect(dimension([1, 2, [3, 4, 5, [6, 7, [8, 9]]]])).toBe(4);
});

test('returns the number of dimensions of an array', () => {
    expect(dimension([1, 2, 3])).toBe(1);
});
