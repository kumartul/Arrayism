// Function: Counts the number of dimensions in an array
function dimension(array){
    let dimension = 1;
    function iterate(arr){
        arr.forEach(ar => {
            if(Array.isArray(ar)){
                dimension++;
                iterate(ar);
            }
        });
    }
    if(Array.isArray(array)){
        iterate(array);
        return dimension;
    }
    else{
        throw new TypeError("Failed to execute 'dimension': Argument must be an array");
    }
}

module.exports = dimension;
