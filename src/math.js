// Function: Adds all the elements in array
function sum(array){
    if(Array.isArray(array)){
        return array.reduce((val1, val2) => val1 + val2);
    }
    else{
        throw new TypeError("Failed to execute 'sum': Argument must be an array");
    }
}

// Functions: Subtracts all the elements in array starting from the zero-index
function difference(array){
    if(Array.isArray(array)){
        return array.reduce((val1, val2) => val1 - val2);
    }
    else{
        throw new TypeError("Failed to execute 'difference': Argument must be an array");
    }
}

// Function: Multiplies all the elements in the array
function product(array){
    if(Array.isArray(array)){
        return array.reduce((val1, val2) => val1 * val2);
    }
    else{
        throw new TypeError("Failed to execute 'product': Argument must be an array");
    }
}

// Function: Divides each element of the array from the previous element starting from the zeroth-index
function quotient(array){
    if(Array.isArray(array)){
        return array.reduce((val1, val2) => val1 / val2);
    }   
    else{
        throw new TypeError("Failed to execute 'quotient': Argument must be an array");
    } 
}

module.exports.sum = sum;
module.exports.difference = difference;
module.exports.product = product;
module.exports.quotient = quotient;