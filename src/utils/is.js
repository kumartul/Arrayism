// Functions: Checks whether the argument is a number or not
function isNumber(value){
    return !(Math.floor(value) - value) ? true : false;
}

module.exports = isNumber;