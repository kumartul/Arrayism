// Function: Shuffles an array
function shuffle(array){
    let shuffledArr = [...array];
    if(Array.isArray(shuffledArr)){
        for(let i = shuffledArr.length - 1; i > 0; i--){
            let temp =  shuffledArr[i];
            let randomIndex = Math.floor(Math.random() * (i + 1));
            shuffledArr[i] = shuffledArr[randomIndex];
            shuffledArr[randomIndex] = temp;
        }
        return shuffledArr;
    }
    else{
        throw new TypeError("Failed to execute 'shuffle': Argument must be an array");
    }
}

module.exports = shuffle;
