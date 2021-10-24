// Function: Removes an element from an array
// If there are multiple occurrences of the element, then the first element is removed
function remove(array, value, removeAll=true){
    if(Array.isArray(array)){
        if(array.includes(value)){
            if(removeAll){
                return array.filter(element => element !== value);
            }
            else{
                array.splice(array.indexOf(value), 1);
                return array;
            }
        }
        else{
            throw new RangeError(`Failed to execute 'remove': ${value} is not an element of the array passed as argument`);
        }
    }
    else{
        throw new TypeError("Failed to execute 'remove': Argument must be an array");
    }
}

function removeMany(array, values){
    if(Array.isArray(array)){
        if(Array.isArray(values)){
            return array.filter(value => !values.includes(value));
        }
        else{
            throw new TypeError("Failed to execute 'removeMany': Please pass an array of values that you want to remove");
        }
    }
    else{
        throw new TypeError("Failed to execute 'removeMany': First argument must be an array");
    }
}

module.exports.remove = remove;
module.exports.removeMany = removeMany;
