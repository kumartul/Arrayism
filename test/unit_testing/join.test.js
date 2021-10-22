const join = require("../../src/join.js");

test("joins one or more element(s) to the array", () => {
    expect(join.join([1, 2, 3], 6, "Foo", "Bar")).toEqual([1, 2, 3, 6, "Foo", "Bar"]);
});

test("joins only the elements which are not present in the array", () => {
    expect(join.joinDiff([1, 2, 3], 6, 1, 2, "Foo", "Bar")).toEqual([1, 2, 3, 6, "Foo", "Bar"]);
});