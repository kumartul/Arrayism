// Functions: Returns a piece from an array
function getPiece(array, from, to){
    if(Array.isArray(array)){
        if(!array.includes(from)){
            throw new RangeError(`Failed to execute 'getPiece': ${from} is not an element of the array`);
        }
        if(!array.includes(to)){
            throw new RangeError(`Failed to execute 'getPiece': ${to} is not an element of the array`);
        }

        let start = array.indexOf(from);
        let end = array.indexOf(to);

        return array.splice(start, end);
    }
    else{
        throw new TypeError("Failed to execute 'getPiece': First argument must be an array");
    }
}

module.exports = getPiece;