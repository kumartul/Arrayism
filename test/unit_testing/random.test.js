const random = require("../../src/random.js");

test("returns a random value from an array", () => {
    expect(random([1, 2, 3], 1)).not.toBe(0);
});