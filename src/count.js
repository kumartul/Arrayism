// Function: Returns the number of times an element is repeated in an array
function count(array, element){
    if(Array.isArray(array)){
        let count = 0;
        for(let i = 0; i < array.length; i++){
            if(element === array[i]){
                count++;
            }
        }
        return count;
    }
    else{
        throw new TypeError("Failed to execute 'count': First argument must be an array");
    }
}

module.exports = count;