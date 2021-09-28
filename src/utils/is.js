// Functions: Checks whether the argument is a number or not
function isNumber(value){
    return !(Math.floor(value) - value) ? true : false;
}

function isPositive(value){
    return value >= 0 ? true : false;
}

function isNegative(value){
    return value < 0 ? true : false;
}

module.exports.isNumber = isNumber;
module.exports.isPositive = isPositive;
module.exports.isNegative = isNegative;