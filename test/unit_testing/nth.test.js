const nth = require("../../src/nth.js");

test("returns the element at the nth position of the array", () => {
    expect(nth([1, 2, 3], 2)).toBe(3);
});

test("returns the element at the nth position of the array from the last", () => {
    expect(nth([1, 2, 3], -2)).toBe(2);
});