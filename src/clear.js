// Function: Removes all the elements from an array
function clear(array){
    if(Array.isArray(array)){
        array = [];
    }
    else{
        throw new TypeError("Failed to execute 'clear': Argument must be an array");
    }
}

module.exports = clear;
