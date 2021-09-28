// Function: Returns all the unique values in an array
function unique(array){
    let uniqueArr = [...array];
    if(Array.isArray(uniqueArr)){
        return Array.from(new Set(uniqueArr));
    }
    else{
        throw new TypeError("Failed to execute 'unique': Argument must be an array");
    }
}

module.exports = unique;