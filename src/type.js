// Function: Returns the type of array
function type(array){
    if(Array.isArray(array)){
        let set = new Set();
        for(let i = 0; i < array.length; i++){
            set.add(typeof array[i]);
        }
        if(set.size === 1){
            set = Array.from(set).toString();
            switch(set){
            case "boolean":
                return "Boolean Array";
            case "number":
                return "Number Array";
            case "bigint":
                return "Bigint Array";
            case "undefined":
                return "Undefined Array";
            case "symbol":
                return "Symbol Array";
            case "object":
                return "Object Array";
            case "string":
                return "String Array";
            }
        }
        else{
            return "Mixed Array";
        }
    }
    else{
        throw new TypeError("Failed to execute 'type': Argument must be an array");
    }
}

module.exports = type;
