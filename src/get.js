// Function: Gets all the value from the array and returns it
function getValues(array){
    if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++){
            console.log(array[i]);
        }
    }
    else{
        throw new TypeError("Failed to execute 'getValues': Argument must be an array");
    }
}

module.exports = getValues;