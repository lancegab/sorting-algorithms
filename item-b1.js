var viewport = document.getElementById("ItemB1");
var ctx = viewport.getContext("2d");

list = generateRandomArr(8, 100)

list1 = list.slice().sort(function(a,b){
            return a - b
        });
list2 = shuffle(list.slice());
list3 = list.slice().sort(function(a,b){
            return b - a
        });

var gaps = [1];

console.log("RANDOM");
var shellSortGraph = {
    label: 'Shell Sort with Random Gaps',
    fill: false,
    data: [
            {x: 0, y: shellSort(list1.slice(), gaps)},
            {x: 0, y: shellSort(list2.slice(), gaps)},
            {x: 0, y: shellSort(list3.slice(), gaps)},
    ],
    borderColor: ['rgba(255,99,132,1)']
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
    borderWidth: 6
}

var chartData = {
    type: 'line',
    data: {
        labels: ["Pre-sorted", "Random", "Reverse-sorted"],
        datasets: [shellSortGraph, insertionSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
// var myChart2 = new Chart(ctx2, chartData);
