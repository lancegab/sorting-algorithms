function selectionSort(unsortedList){
    var comparison = 0;
    var minIndex;
    var temp;
    var length = unsortedList.length;

    for(var i = 0; i < length; i++){
        minIndex = i;
        for(var  j = i+1; j<length; j++){
            if(unsortedList[j]<unsortedList[minIndex]){
                comparison++
                minIndex = j;
            }
        }

        temp = unsortedList[i];
        unsortedList[i] = unsortedList[minIndex];
        unsortedList[minIndex] = temp;
    }
    return comparison;
}

function bubbleSort(unsortedList){
    var comparison = 0;
    var length = unsortedList.length;

    for (var i = length-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(unsortedList[j-1]>unsortedList[j]){
                comparison++;
                var temp = unsortedList[j-1];
                unsortedList[j-1] = unsortedList[j];
                unsortedList[j] = temp;
            }
        }
    }

    return comparison;
}

function insertionSort(unsortedList) {
    var comparison = 0;
    var length = unsortedList.length;
    for (var i = 1; i < length; i++) {
        var tmp = unsortedList[i];
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            comparison++;
            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;
    }

    return comparison;
}

function shellSort(array, gaps) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;

    for(var g = 0; g < gaps.length; g++) {
        var gap = gaps[g];
        for(var i = gap; i < array.length; i++) {
            countOuter++;
            var temp = array[i];
            for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                countInner++;
                countSwap++;
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }
    }
  return countInner;
}
