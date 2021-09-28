// Function: Shuffles an array
function shuffle(array){
    if(Array.isArray(array)){
        for(let i = array.length - 1; i > 0; i--){
            let temp =  array[i];
            let randomIndex = Math.floor(Math.random() * (i + 1));
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    }
    else{
        throw new TypeError("Failed to execute 'shuffle': Argument must be an array");
    }
}

module.exports = shuffle;