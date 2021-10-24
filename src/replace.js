// Function: Replaces the element from an array
function replace(array, element, newElement, replaceAll=true){
    if(Array.isArray(array)){
        if(array.includes(element)){
            if(replaceAll){
                array.map(elem => {
                    if(elem === element){
                        elem = newElement;
                    }
                });
            }
            else{
                array.splice(array.indexOf(element), 1, newElement);
            }
        }
        else{
            throw new RangeError(`Failed to execute 'replace': ${element} is not an element of the passed array`);
        }
    }
    else{
        throw new TypeError("Failed to execute 'replace': First argument must be an array");
    }
}

module.exports = replace;
