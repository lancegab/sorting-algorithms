var viewport = document.getElementById("myChart");
var ctx = viewport.getContext("2d");

list1 = [1, 2, 3, 4, 5, 6, 7, 8]
list2 = [1, 3, 2, 7, 9, 8, 5, 4]
list3 = [8, 7, 6, 5, 4, 3, 2, 1]

var selectionSortGraph = {
    label: 'Selection Sort',
    fill: false,
    data: [
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
            {x: 0, y: insertionSort(list1.slice())},
            {x: 0, y: insertionSort(list2.slice())},
            {x: 0, y: insertionSort(list3.slice())},
    ],
    borderColor: ['rgba(99,132,255,1)'],
}

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Pre-sorted", "Random", "Reverse-sorted"],
        datasets: [selectionSortGraph, bubbleSortGraph, insertionSortGraph]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: false,
            }],
            xAxes: [{
                stacked: false,
            }],
        }
    }
});