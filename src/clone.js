// Function: Clones an array
function clone(array){
    if(Array.isArray(array)){
        return [...array];
    }
    else{
        throw new TypeError("Failed to execute 'clone': Argument must be an array");
    }
}

module.exports = clone;