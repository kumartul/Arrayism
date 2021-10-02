// Function: Joins more elements to an array
function join(array, ...elements){
    if(Array.isArray(array)){
        let joinedArr = [...array, ...elements];
        return joinedArr;
    }
    else{
        throw new TypeError("Failed to execute 'join': First argument must be an array");
    }
}

// Function: Joins only the things in the array which is not already present
function joinDiff(array, ...elements){
    if(Array.isArray(array)){
        let copiedArr = [...array];
        for(let i = 0; i < elements.length; i++){
            if(!copiedArr.includes(elements[i])){
                copiedArr.push(elements[i]);
            }
        }
        return copiedArr;
    }
    else{
        throw new TypeError("Failed to execute 'joinDiff': First argument must be an array");
    }
}

module.exports.join = join;
module.exports.joinDiff = joinDiff;