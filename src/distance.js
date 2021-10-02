// Function: Finds the distance between two indices
function distance(array, elem1, elem2){
    if(Array.isArray(array)){
        if(array.includes(elem1)){
            if(array.includes(elem2)){
                return array.indexOf(elem2) - array.indexOf(elem1);
            }
            else{
                throw new Error(`Failed to execute 'distance': The array doesn't contains ${elem2}`);
            }
        }
        else{
            throw new Error(`Failed to execute 'distance': The array doesn't contains ${elem1}`);
        }
    }
    else{
        throw new TypeError("Failed to execute 'distance': First argument must be an array");
    }
}

module.exports = distance;