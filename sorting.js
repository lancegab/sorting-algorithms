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



function bucketSort(array, bucketSize) {
    var time = 0;
    if (array.length === 0) {
        return time;
    }

    // Declaring vars
    var i,
    minValue = array[0],
    maxValue = array[0],
    bucketSize = bucketSize || 5;

    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })

    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }

    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });

    // Sorting buckets
    array.length = 0;

    allBuckets.forEach(function(bucket) {
        time+=insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
    return time;
}



var getDigit = function(num,nth){
    // get last nth digit of a number
    var ret = 0;
    while(nth--){
      ret = num % 10
      num = Math.floor((num - ret) / 10)
    }
    return ret
};

 // radixSort
function radixCountingSort(list){
    var time = 0;
    var max = Math.floor(Math.log10(Math.max.apply(Math,list))),

    // get the length of digits of the max value in this array
    digitBuckets = [],
    idx = 0;

    for(var i = 0;i<max+1;i++){

        // rebuild the digit buckets according to this digit
        digitBuckets = []
        for(var j = 0;j<list.length;j++){
            var digit = getDigit(list[j],i+1);

            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(list[j]);
        }

        // rebuild the list according to this digit
        idx = 0
        for(var t = 0; t< digitBuckets.length;t++){
            if(digitBuckets[t] && digitBuckets[t].length > 0){
                for(j = 0;j<digitBuckets[t].length;j++){
                    list[idx++] = digitBuckets[t][j];
                    time++;
                }
            }
        }
    }

    return time;
}

function radixInsertionSort (arr) {
    var time = 0;
    var idx1, idx2, idx3, len1, len2, radix, radixKey;
    var radices = {}, buckets = {}, num, curr;
    var currLen, radixStr, currBucket;

    len1 = arr.length;
    len2 = 10;  // radix sort uses ten buckets

    // find the relevant radices to process for efficiency
    for (idx1 = 0;idx1 < len1;idx1++) {
        radices[arr[idx1].toString().length] = 0;
    }

    // loop for each radix. For each radix we put all the items
    // in buckets, and then pull them out of the buckets.
    for (radix in radices) {
        // put each array item in a bucket based on its radix value
        len1 = arr.length;
        for (idx1 = 0;idx1 < len1;idx1++) {
            curr = arr[idx1];
            // item length is used to find its current radix value
            currLen = curr.toString().length;
            // only put the item in a radix bucket if the item
            // key is as long as the radix
            if (currLen >= radix) {
                // radix starts from beginning of key, so need to
                // adjust to get redix values from start of stringified key
                radixKey = curr.toString()[currLen - radix];
                // create the bucket if it does not already exist
                if (!buckets.hasOwnProperty(radixKey)) {
                    buckets[radixKey] = [];
                }
                // put the array value in the bucket
                buckets[radixKey].push(curr);
            } else {
                if (!buckets.hasOwnProperty('0')) {
                    buckets['0'] = [];
                }
                buckets['0'].push(curr);
            }
        }
        // for current radix, items are in buckets, now put them
        // back in the array based on their buckets
        // this index moves us through the array as we insert items
        idx1 = 0;
        // go through all the buckets
        for (idx2 = 0;idx2 < len2;idx2++) {
            // only process buckets with items
            if (buckets[idx2] != null) {
                currBucket = buckets[idx2];
                // insert all bucket items into array
                len1 = currBucket.length;
                for (idx3 = 0;idx3 < len1;idx3++) {
                    arr[idx1++] = currBucket[idx3];
                    time++;
                }
            }
            time++;
        }
        buckets = {};
    }

    return time;
}

// var mergeComparison = 0;
// function mergeSort(list){
//   mergeComparison = 0;
//   if(list.length>2)
//     mergeSortMain(list);
//   // else if(list.length>1)
//   //   merge(list[0],list[1]);
//   return mergeComparison;
// }
//
// function mergeSortMain(arr){
//    var len = arr.length;
//    if(len <2)
//       return arr;
//    var mid = Math.floor(len/2),
//        left = arr.slice(0,mid),
//        right = arr.slice(mid);
//    //send left and right to the mergeSort to broke it down into pieces
//    //then merge those
//    return merge(mergeSort(left),mergeSort(right));
// }
//
// function merge(left, right){
//   var result = [],
//       lLen = left.length,
//       rLen = right.length,
//       l = 0,
//       r = 0;
//   while(l < lLen && r < rLen){
//      if(left[l] < right[r]){
//          mergeComparison++;
//        result.push(left[l++]);
//      }
//      else{
//          mergeComparison++;
//        result.push(right[r++]);
//     }
//   }
//   //remaining part needs to be addred to the result
//   return result.concat(left.slice(l)).concat(right.slice(r));
// }
var MStime;
function mergeSort(list){
  MStime = 0;
  if(list.length>2)
    mergeSortMain(list);
  return MStime;
}

function mergeSortMain(arr){
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSortMain(left), mergeSortMain(right));
}

function merge(left, right){
  var result = [];

  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
      MStime++;
  }

  while (left.length){
      result.push(left.shift());
      MStime++;
  }

  while (right.length){
      result.push(right.shift());
      MStime++;
  }

  return result;
}


var QStime = 0;
function quickSort(arr, left, right){
   var len = arr.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return QStime;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   QStime++;
}

// var QStime = 0;
// function quickSort(list){
//   QStime = 0;
//   quicksort(list);
//   return QStime;
// }
//
// function quicksort(arr){
//     if (arr.length == 0)
//         return [];
//
//     var left = new Array();
//     var right = new Array();
//     var pivot = arr[0];
//
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//            left.push(arr[i]);
//         } else {
//            right.push(arr[i]);
//         }
//         QStime++;
//     }
//
//     return quicksort(left).concat(pivot, quicksort(right));
// }
