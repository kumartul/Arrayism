const filter = require('./filter.js');
const pollute = require('./pollute.js');
const clean = require('./clean.js');
const type = require('./type.js');

// Function: Returns an object showing a detailed information about the array
function getDataInfo(array){
    if(Array.isArray(array)){
        let copiedArr = [...array];
        const info = {
            length: copiedArr.length,
            dataTypeDistribution: {
                BigInt: filter(copiedArr, 'bigint'),
                Boolean: filter(copiedArr, 'boolean'),
                Function: filter(copiedArr, 'function'),
                Number: filter(copiedArr, 'number'),
                Object: filter(copiedArr, 'object'),
                String: filter(copiedArr, 'string'),
                Symbol: filter(copiedArr, 'symbol'),
                Undefined: filter(copiedArr, 'undefined'),
                falsyValues: pollute(copiedArr),
                truthyValues: clean(copiedArr)
            },
            arrayType: type(copiedArr)
        }

        return info;
    }
    else{
        throw new TypeError("Failed to execute 'getDataInfo': Argument must be an array");
    }
}

module.exports = getDataInfo;