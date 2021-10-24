// Function: Flattens the array
function flatten(array, depth)
{
    let copiedArr = [...array];

    if(Array.isArray(copiedArr)){
        if(Number.isInteger(depth)){
            for(let i = 0; i < depth; i++){
                copiedArr = copiedArr.flat();
            }
            return copiedArr;
        }
        else{
            for(let i = 0; i < copiedArr.length; i++){
                if(Array.isArray(copiedArr[i])){
                    copiedArr = copiedArr.flat();
                }
            }
            return copiedArr;
        }
    }
    else{
        throw new TypeError("Failed to execute 'flatten': First argument must be an array");
    }
}

module.exports = flatten;
