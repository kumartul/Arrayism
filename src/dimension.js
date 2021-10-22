// Function: Counts the number of dimensions in an array
function dimension(array){
    if(Array.isArray(array)){
        let dimension = 1;
        function iterate(arr){
            arr.forEach(ar => {
                if(Array.isArray(ar)){
                    dimension++;
                    iterate(ar);
                }
            });
        }
        iterate(array);
        return dimension;
    }
    else{
        throw new TypeError("Failed to execute 'dimension': Argument must be an array");
    }
}

module.exports = dimension;