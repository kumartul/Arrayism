// Function: Pollutes an array by keeping all the falsy values
function pollute(array){
    let pollutedArr = [...array];
    if(Array.isArray(pollutedArr)){
        return pollutedArr.filter(value => !value);
    }
    else{
        throw new TypeError("Failed to execute 'pollute': Argument must be an array");
    }
}

module.exports = pollute;