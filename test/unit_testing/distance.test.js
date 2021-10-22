const distance = require("../../src/distance.js");

test("returns the distance between two indices", () => {
    expect(distance(["Foo", 1, 4, "Bar", true], 1, true)).toBe(3);
});