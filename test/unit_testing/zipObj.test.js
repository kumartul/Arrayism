const zipObj = require("../../src/zipObj.js");

test("Zips the array in an object", () => {
    expect(zipObj(["A", "B"], ["Alpha", "Beta"])).toEqual({ "A": "Alpha", "B": "Beta" });
});

