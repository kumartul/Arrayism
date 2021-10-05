// Function: Swaps the elements at two indices
function swap(array, elem1, elem2){
    if(Array.isArray(array)){
        if(array.includes(elem1)){
            if(array.includes(elem2)){
                array[array.indexOf(elem1)] = elem2;
                array[array.indexOf(elem2)] = elem1;
            }
            else{
                throw new RangeError(`Failed to execute 'swap': The array doesn't contains ${elem2}`);
            }
        }
        else{
            throw new RangeError(`Failed to execute 'swap': The array doesn't contains ${elem1}`);
        }
    }
    else{
        throw TypeError("Failed to execute 'swap': First argument must be an array");
    }
}

module.exports = swap;