// Function: Cleans the array by removing all falsy values
// Falsy Values => false, 0, "", null, undefined, NaN
function clean(array){
    if(Array.isArray(array)){
        return array.filter(value => value);
    }
    else{
        throw new TypeError("Failed to execute 'clean': Argument must be an array");
    }
}

module.exports = clean;