const sort = require("../../src/sort.js");

test("sorts the array in ascending order", () => {
    expect(sort.asort([6, 2, 0, 21, 4, 3])).toEqual([0, 2, 3, 4, 6, 21]);
});

test("sorts the array in descending order", () => {
    expect(sort.dsort([6, 2, 0, 21, 4, 3])).toEqual([21, 6, 4, 3, 2, 0]);
});