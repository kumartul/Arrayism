// Function: Filters the array based on the data type
function filter(array, dataType){
    let filterArr = [...array];
    if(Array.isArray(array)){
        console.log(dataType);
        switch(dataType){
            case 'bigint':
                return filterArr.filter(value => typeof value === 'bigint');
            case 'boolean':
                return filterArr.filter(value => typeof value === 'boolean');
            case 'function':
                return filterArr.filter(value => typeof value === 'function');
            case 'number':
                return filterArr.filter(value => typeof value === 'number');
            case 'object':
                return filterArr.filter(value => typeof value === 'object' && value !== null && !Array.isArray(value));
            case 'string':
                return filterArr.filter(value => typeof value === 'string');
            case 'symbol':
                return filterArr.filter(value => typeof value === 'symbol');
            case 'undefined':
                return filterArr.filter(value => typeof value === 'undefined');
            default: 
                throw new TypeError("Failed to execute 'filter': Invalid data type");
        }
    }
    else{
        throw new TypeError("Failed to execute 'filter': First argument must be an array");
    }
}

module.exports = filter;