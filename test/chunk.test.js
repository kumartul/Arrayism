const chunk = require('../src/chunk.js');

test('returns two array chunks of equal length', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
});

test('returns three chunks of array of equal length and fourth chunk of array with unequal length', () => {
    expect(chunk(["Bill", "Steve", "Dennis", "Brian", "Linus", "Satya", "Sundar", "Larry", "Sergey", "Mark"], 3)).toEqual([["Bill", "Steve", "Dennis"], ["Brian", "Linus", "Satya"], ["Sundar", "Larry", "Sergey"], ["Mark"]]);
});