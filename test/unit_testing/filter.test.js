const filter = require('../../src/filter.js');

test('filters elements of the same data type from the array', () => {
    expect(filter(["Foo", 1, true, "Bar", { name: "Foo", surname: "bar" }], "string")).toEqual(["Foo", "Bar"]);
});

test('filters elements of the same data type from the array', () => {
    expect(filter(["Foo", 1, true, "Bar", { name: "Foo", surname: "bar" }], "number")).toEqual([1]);
});

test('filters elements of the same data type from the array', () => {
    expect(filter(["Foo", 1, true, "Bar", { name: "Foo", surname: "bar" }], "object")).toEqual([{ name: "Foo", surname: "bar" }]);
});