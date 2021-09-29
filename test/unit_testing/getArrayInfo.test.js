const getArrayInfo = require('../../src/getArrayInfo.js');

test('returns an object containing detailed information about the array', () => {
    expect(getArrayInfo([1, "Atul", true, "Kumar"])).toEqual({
        length: 4,
        dataTypeDistribution: {
          BigInt: [],
          Boolean: [ true ],
          Function: [],
          Number: [ 1 ],
          Object: [],
          String: [ 'Atul', 'Kumar' ],
          Symbol: [],
          Undefined: [],
          falsyValues: [],
          truthyValues: [ 1, 'Atul', true, 'Kumar' ]
        },
        arrayType: 'Mixed Array'
      });
});