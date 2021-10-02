// Function: Changes the case of each string element of a string
function changeCase(array, textCase){
    if(Array.isArray(array)){
        let copiedArr = [...array];
        switch(textCase){
            case "lower":
                for(let i = 0; i < copiedArr.length; i++){
                    if(typeof copiedArr[i] === 'string'){
                        copiedArr[i] = copiedArr[i].toLowerCase();
                    }
                }
                return copiedArr;
            case "upper":
                for(let i = 0; i < copiedArr.length; i++){
                    if(typeof copiedArr[i] === 'string'){
                        copiedArr[i] = copiedArr[i].toUpperCase();
                    }
                }
                return copiedArr;
            case "sentence":
                for(let i = 0; i < copiedArr.length; i++){
                    if(typeof copiedArr[i] === 'string'){
                        let firstChar = copiedArr[i][0].toUpperCase();
                        let newElem = copiedArr[i].slice(1,).toLowerCase();
                        copiedArr[i] = firstChar + newElem;
                    }
                }
                return copiedArr;
            default: 
                throw new RangeError("Failed to execute 'changeCase': Invalid Case");
        }
    }
    else{
        throw new TypeError("Failed to execute 'changeCase': First argument must be an array");
    }
}

module.exports = changeCase;