var viewport = document.getElementById("ItemE-1");
var ctx = viewport.getContext("2d");

list1 = generateRandomArr(50, 1000)
list2 = generateRandomArr(100, 1000)
list3 = generateRandomArr(150, 1000)

var mergeSortGraph = {
    label: 'Merge Sort',
    fill: false,
    data: [
            {x: 0, y: 0},
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
            {x: 0, y: 0},
            {x: 0, y: quickSort(list1.slice(), 0 ,list1.length-1)},
            {x: 0, y: quickSort(list2.slice(), 0 ,list1.length-1)},
            {x: 0, y: quickSort(list3.slice(), 0 ,list1.length-1)},
    ],
    borderColor: ['rgba(99,132,255,1)']
}

var chartData = {
    type: 'line',
    data: {
        labels: [0, list1.length, list2.length, list3.length],
        datasets: [mergeSortGraph, quickSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
