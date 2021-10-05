const zipObj = require('../../src/zipObj.js');
const unzipObj = require('../../src/unzipObj.js');

const zipped = zipObj(["A", "B"], ["Alpha", "Beta"]);

test('Unzips an object and returns an array', () => {
    expect(unzipObj(zipped)).toEqual([["A", "B"], ["Alpha", "Beta"]]);
});