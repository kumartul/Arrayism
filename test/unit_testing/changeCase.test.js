const changeCase = require('../../src/changeCase.js');

test('changes the case of all the string elements of the array to lowercase', () => {
    expect(changeCase(["Foo", "bAR", 1, { name: "NodeJS", age: 12 }, "NODE", "JavaSCRipT"], "lower")).toEqual(["foo", "bar", 1, { name: "NodeJS", age: 12 }, "node", "javascript"]);
});

test('changes the case of all the string elements of the array to uppercase', () => {
    expect(changeCase(["Foo", "bAR", 1, { name: "NodeJS", age: 12 }, "NODE", "JavaSCRipT"], "upper")).toEqual(["FOO", "BAR", 1, { name: "NodeJS", age: 12 }, "NODE", "JAVASCRIPT"]);
});

test('changes the case of all the string elements of the array to sentence case', () => {
    expect(changeCase(["Foo", "bAR", 1, { name: "NodeJS", age: 12 }, "NODE", "JavaSCRipT"], "sentence")).toEqual(["Foo", "Bar", 1, { name: "NodeJS", age: 12 }, "Node", "Javascript"]);
});