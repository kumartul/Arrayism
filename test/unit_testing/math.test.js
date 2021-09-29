const math = require('../../src/math.js');

test('adds all the elements of an array', () => {
    expect(math.sum([1, 2, 3])).toBe(6);
});

test('subtracts all the elements of an array from the previous element of the array', () => {
    expect(math.difference([1, 2, 3])).toBe(-4);
});

test('multiplies all the elements of an array', () => {
    expect(math.product([1, 2, 3])).toBe(6);
});

test('divides all the elements of an array from the previous element', () => {
    expect(math.quotient([1, 2, 4])).toBe(0.125);
});

test('finds the average of all the elements of the array', () => {
    expect(math.average([1, 4, 9, 16, 25])).toBe(11);
});

