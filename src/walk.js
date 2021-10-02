const is = require('./utils/is.js');

// Function: Walks an array and performs an action on each element
function walk(array, callback=(elem)=>{}){
    if(Array.isArray(array)){
        if(is.isFunc(callback)){
            for(let i = 0; i < array.length; i++){
                callback(array[i]);
            }
        }
        else{
            throw new TypeError("Failed to execute 'walk': Callback must be a function")
        }
    }
    else{
        throw new TypeError("Failed to execute 'walk': First argument must be an array");
    }
}

module.exports = walk;