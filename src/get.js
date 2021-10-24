// Function: Gets all the value from the array and returns it
function getValues(array){
    if(Array.isArray(array)){
        array.forEach(elem => console.log(elem));
    }
    else{
        throw new TypeError("Failed to execute 'getValues': Argument must be an array");
    }
}


module.exports = getValues;
