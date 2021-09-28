// Functions: Returns a piece from an array
function getPiece(array, from, to){
    let copiedArr = [...array];
    if(Array.isArray(array)){
        if(!copiedArr.includes(from)){
            throw new RangeError(`Failed to execute 'getPiece': ${from} is not an element of the array`);
        }
        if(!copiedArr.includes(to)){
            throw new RangeError(`Failed to execute 'getPiece': ${to} is not an element of the array`);
        }

        let start = copiedArr.indexOf(from);
        let end = copiedArr.indexOf(to);

        return copiedArr.splice(start, end);
    }
    else{
        throw new TypeError("Failed to execute 'getPiece': First argument must be an array");
    }
}

module.exports = getPiece;