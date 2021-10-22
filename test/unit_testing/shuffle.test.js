const shuffle = require("../../src/shuffle.js");

test("shuffles the array", () => {
    expect(shuffle([1, 2, 3])).not.toBe([1, 2, 3]);
});