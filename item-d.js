var viewport = document.getElementById("ItemD");
var ctx = viewport.getContext("2d");

list = generateRandomArr(8, 100)

list1 = list.slice().sort(function(a,b){
            return a - b
        });
list2 = shuffle(list.slice());
list3 = list.slice().sort(function(a,b){
            return b - a
        });


var radixCountingSortGraph = {
    label: 'Radix Counting Sort',
    fill: false,
    data: [
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
            {x: 0, y: radixInsertionSort(list1.slice())},
            {x: 0, y: radixInsertionSort(list2.slice())},
            {x: 0, y: radixInsertionSort(list3.slice())},
    ],
    borderColor: ['rgba(99,132,255,1)']
}

var chartData = {
    type: 'line',
    data: {
        labels: ["Pre-sorted", "Random", "Reverse-sorted"],
        datasets: [radixCountingSortGraph, radixInsertionSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
