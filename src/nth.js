const is = require("./utils/is.js");

// Function: Returns the element at the nth index of an array
// If n is negative, then the element from the last is returned
function nth(array, n){
    if(Array.isArray(array)){
        if(Number.isInteger(n)){
            if(is.isPositive(n)){
                return array[n];
            }
            else{
                return array[array.length + n];
            }
        }
        else{
            throw new TypeError("Failed to execute 'nth': Position must be an integer");
        }
    }
    else{
        throw new TypeError("Failed to execute 'nth': First argument must be an array");
    }
}

module.exports = nth;
