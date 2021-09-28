// Function: Returns all the unique values in an array
function unique(array){
    if(Array.isArray(array)){
        return Array.from(new Set(array));
    }
    else{
        throw new TypeError("Failed to execute 'unique': Argument must be an array");
    }
}

module.exports = unique;