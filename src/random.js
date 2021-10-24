// Function: Returns random value(s) from an array
function random(array, length=1){
    if(Array.isArray(array)){
        if(Number.isInteger(length)){
            if(length === 1){
                return array[Math.floor(Math.random() * array.length)];
            }
            else{
                let randomArr = [];
                for(let i = 0; i < length; i++){
                    randomArr.push(Math.floor(Math.random() * array.length));
                }
                return randomArr;
            }
        }
        else{
            throw new TypeError("Failed to execute 'random': Length must be an integer");
        }
    }
    else{
        throw new TypeError("Failed to execute 'random': First argument must be an array");
    }
}

module.exports = random;
