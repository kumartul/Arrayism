// Function: Filters the array based on the data type
function filter(array, dataType){
    let filteredArr = [...array];
    if(Array.isArray(array)){
        switch(dataType.toLowerCase()){
            case 'bigint':
                return filteredArr.filter(value => typeof value === 'bigint');
            case 'boolean':
                return filteredArr.filter(value => typeof value === 'boolean');
            case 'function':
                return filteredArr.filter(value => typeof value === 'function');
            case 'number':
                return filteredArr.filter(value => typeof value === 'number');
            case 'object':
                return filteredArr.filter(value => typeof value === 'object' && value !== null && !Array.isArray(value));
            case 'string':
                return filteredArr.filter(value => typeof value === 'string');
            case 'symbol':
                return filteredArr.filter(value => typeof value === 'symbol');
            case 'undefined':
                return filteredArr.filter(value => typeof value === 'undefined');
            default: 
                throw new TypeError("Failed to execute 'filter': Invalid data type");
        }
    }
    else{
        throw new TypeError("Failed to execute 'filter': First argument must be an array");
    }
}

module.exports = filter;