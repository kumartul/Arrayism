const type = require('../../src/type.js');

test('returns the type of array', () => {
    expect(type([1, 2, 3])).toBe("Number Array");
});

test('returns the type of array', () => {
    expect(type([true, false, true, true, false])).toBe("Boolean Array");
});

test('returns the type of array', () => {
    expect(type(["Bill", "Steve", "Larry"])).toBe("String Array");
});

test('returns the type of array', () => {
    expect(type([1, 2, 3])).toBe("Number Array");
});

test('returns the type of array', () => {
    expect(type([1, true, "Atul", null, { name: "foo", profession: "bar" }, 2, 3])).toBe("Mixed Array");
});

test('returns the type of array', () => {
    expect(type([undefined, undefined, undefined])).toBe("Undefined Array");
});