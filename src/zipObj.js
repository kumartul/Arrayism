// Function: Zips the array in an object and returns that object
function zipObj(keysArr, valuesArr){
    if(Array.isArray(keysArr) && Array.isArray(valuesArr)){
        let zippedObj = {}
        
        for(let i = 0; i < keysArr.length; i++){
            zippedObj[keysArr[i]] = valuesArr[i];
        }
        
        return zippedObj;
    }
    else{
        throw new TypeError("Failed to execute 'keysArr': Both the arguments must be an array");
    }
}

module.exports = zipObj;