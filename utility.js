function generateRandomNumber(start, end){
    return Math.floor((Math.random() * end) + start);

}

function generateRandomArr(size, range){
    var arr = [];
    for(i = 0; i < size; i++){
        arr.push(Math.floor((Math.random() * range) + 1));
    }
    return arr;
}

function findLargestNumber(array){
    array.sort(function(a,b){
        return b - a
    })
    return array[0];
}

function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

  return array;
}
