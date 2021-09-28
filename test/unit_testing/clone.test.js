const clone = require('../../src/clone.js');

test('clones the array', () => {
    expect(clone([1, "Foo", 2.5, true, NaN, ]));
})