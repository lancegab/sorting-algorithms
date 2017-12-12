var viewport = document.getElementById("ItemD-2");
var ctx = viewport.getContext("2d");

list1 = generateRandomArr(50, 1000)
list2 = generateRandomArr(100, 1000)
list3 = generateRandomArr(150, 1000)

list1 = shuffle(list1)
list2 = shuffle(list2)
list3 = shuffle(list3)


var radixCountingSortGraph = {
    label: 'Radix Counting Sort',
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: radixCountingSort(list1.slice())},
            {x: 0, y: radixCountingSort(list2.slice())},
            {x: 0, y: radixCountingSort(list3.slice())},
    ],
    borderColor: ['rgba(255,99,132,1)'],
}

var radixInsertionSortGraph = {
    label: 'Radix Insertion Sort',
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: radixInsertionSort(list1.slice())},
            {x: 0, y: radixInsertionSort(list2.slice())},
            {x: 0, y: radixInsertionSort(list3.slice())},
    ],
    borderColor: ['rgba(99,132,255,1)']
}

var chartData = {
    type: 'line',
    data: {
        labels: [0, list1.length, list2.length, list3.length],
        datasets: [radixCountingSortGraph, radixInsertionSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
