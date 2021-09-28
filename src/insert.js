// Function: Inserts an element before a particular element in an array
function insertBefore(array, element, value){
    if(Array.isArray(array)){
        if(array.includes(element)){
            let elementIndex = array.indexOf(element);
            array.splice(elementIndex, 0, value);
        }
        else{
            throw new RangeError(`Failed to execute 'insertBefore': The array doesn't contains ${element}`)
        }
    }
    else{
        throw new TypeError("Failed to execute 'insertBefore': First argument must be an array");
    }
}

// Function: Inserts an element after a particular element in an array
function insertAfter(array, element, value){
    if(Array.isArray(array)){
        if(array.includes(element)){
            let elementIndex = array.indexOf(element) + 1;
            array.splice(elementIndex, 0, value);
        }
        else{
            throw new RangeError(`Failed to execute 'insertBefore': The array doesn't contains ${element}`)
        }
    }
    else{
        throw new TypeError("Failed to execute 'insertBefore': First argument must be an array");
    }
}

module.exports.insertBefore = insertBefore;
module.exports.insertAfter = insertAfter;