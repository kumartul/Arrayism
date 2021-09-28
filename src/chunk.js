// Function: Creates an array of elements split into groups the length of size
// If the array can't be split evenly, the final chunk will be the remaining element
function chunk(array, size){
    if(Array.isArray(array)){
        if(Number.isInteger(size) || size < 0){
            let start = 0;
            let count = 0;
            let end = 0;

            let chunkedArray = [];

            for(let i = 0; i < array.length; i++, count += size){
                if(count < array.length){
                    start = count;
                    end = count + size;
                    chunkedArray = [...chunkedArray, array.slice(start, end)]
                }
            }
            return chunkedArray;
        }
        else{
            throw new TypeError("Failed to exeucte 'chunk': Size must be a positive integer");
        }
    }
    else{
        throw new TypeError("Failed to execute 'chunk': First argument must be an array");
    }
}

module.exports = chunk;