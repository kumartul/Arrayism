const is = require('./utils/is.js');

// Function: Unzips an object into an array
function unzipObj(obj){
    if(is.isObj(obj)){
        let keysArr = [];
        let valuesArr = [];
        
        const keys = Object.keys(obj);
        for(let i = 0; i < keys.length; i++){
            keysArr.push(keys[i]);
            valuesArr.push(obj[keys[i]]);
        }

        return [keysArr, valuesArr];
    }
    else{
        throw new TypeError("Failed to execute 'unzipObj': Argument must be an object");
    }
}

module.exports = unzipObj;