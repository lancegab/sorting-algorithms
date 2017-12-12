var viewport = document.getElementById("ItemA3");
var ctx = viewport.getContext("2d");

// var viewport2 = document.getElementById("myChart2");
// var ctx2 = viewport2.getContext("2d");

list1 = generateRandomArr(50, 1000)
list2 = generateRandomArr(100, 1000)
list3 = generateRandomArr(150, 1000)

list1.sort(function(a,b){
    return b-a;
});
list2.sort(function(a,b){
    return b-a;
});
list3.sort(function(a,b){
    return b-a;
});

var selectionSortGraph = {
    label: 'Selection Sort',
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: selectionSort(list1.slice())},
            {x: 0, y: selectionSort(list2.slice())},
            {x: 0, y: selectionSort(list3.slice())},
    ],
    borderColor: ['rgba(255,99,132,1)'],
}

var bubbleSortGraph = {
    label: 'Bubble Sort',
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: bubbleSort(list1.slice())},
            {x: 0, y: bubbleSort(list2.slice())},
            {x: 0, y: bubbleSort(list3.slice())},
    ],
    borderColor: ['rgba(99,255,132,1)'],
}

var insertionSortGraph = {
    label: 'Insertion Sort',
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: insertionSort(list1.slice())},
            {x: 0, y: insertionSort(list2.slice())},
            {x: 0, y: insertionSort(list3.slice())},
    ],
    borderColor: ['rgba(99,132,255,1)'],
    borderWidth: 6
}

var chartData = {
    type: 'line',
    data: {
        labels: [0, list1.length, list2.length, list3.length],
        datasets: [selectionSortGraph, bubbleSortGraph, insertionSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
// var myChart2 = new Chart(ctx2, chartData);
