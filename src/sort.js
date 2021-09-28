// Functions: Sorts an array in ascending array
function asort(array){
    if(Array.isArray(array)){
        return array.sort((a, b) => a - b);
    }
    else{
        throw new TypeError("Failed to execute 'asort': Argument must be an array");
    }
}

function dsort(array){
    if(Array.isArray(array)){
        return array.sort((a, b) => a - b).reverse();
    }
    else{
        throw new TypeError("Failed to execute 'dsort': Argument must be an array");
    }
}

module.exports.asort = asort;
module.exports.dsort = dsort;