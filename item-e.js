var viewport = document.getElementById("ItemE");
var ctx = viewport.getContext("2d");

list = generateRandomArr(8, 100)

// list1 = list.slice().sort(function(a,b){
//             return a - b
//         });
// list2 = shuffle(list.slice());
// list3 = list.slice().sort(function(a,b){
//             return b - a
//         });

list1 = generateRandomArr(100, 1000)
list2 = generateRandomArr(1000, 1000)
list3 = generateRandomArr(2000, 1000)
var mergeSortGraph = {
    label: 'Merge Sort',
    fill: false,
    data: [
            {x: 0, y: mergeSort(list1.slice())},
            {x: 0, y: mergeSort(list2.slice())},
            {x: 0, y: mergeSort(list3.slice())},
    ],
    borderColor: ['rgba(255,99,132,1)'],
}

var quickSortGraph = {
    label: 'Quick Sort',
    fill: false,
    data: [
            {x: 0, y: quickSort(list1.slice(), 0 ,list1.length-1)},
            {x: 0, y: quickSort(list2.slice(), 0 ,list1.length-1)},
            {x: 0, y: quickSort(list3.slice(), 0 ,list1.length-1)},
    ],
    borderColor: ['rgba(99,132,255,1)']
}

var chartData = {
    type: 'line',
    data: {
        labels: [list1.length, list2.length, list3.length],
        datasets: [mergeSortGraph, quickSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
