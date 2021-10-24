// Function: Returns the number of times an element is repeated in an array
function count(array, element){
    if(Array.isArray(array)){
        let count = 0;
        array.forEach(elem => {
            if(elem === element){
                count++;
            }
        });
        return count;
    }
    else{
        throw new TypeError("Failed to execute 'count': First argument must be an array");
    }
}

module.exports = count;
