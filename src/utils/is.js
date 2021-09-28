// Functions: Checks if the argument is a number or not
function isNumber(value){
    return !(Math.floor(value) - value) ? true : false;
}

// Function: Checks if the number is positive or not
function isPositive(value){
    return value >= 0 ? true : false;
}

// Function: Checks if the number is negative or not
function isNegative(value){
    return value < 0 ? true : false;
}

// Function: Checks if the value is an object or not
function isObj(value){
    return typeof value === 'object' && typeof value !== 'function' && value !== null;
}

// Function: Checks if the value is a function or not
function isFunc(value){
    return typeof value === 'function';
}

// Function: Checks if the value is a string or not
function isStr(value){
    return typeof value === 'string';
}

// Function: Checks if the value is a decimal or not
function isDecimal(value){
    return ((Math.floor(value) - value) !== 0) ? true : false;
}

module.exports.isNumber = isNumber;
module.exports.isPositive = isPositive;
module.exports.isNegative = isNegative;
module.exports.isObj = isObj;
module.exports.isFunc = isFunc;
module.exports.isStr = isStr;
module.exports.isDecimal = isDecimal;