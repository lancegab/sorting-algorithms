var viewport = document.getElementById("ItemB");
var ctx = viewport.getContext("2d");

// var viewport2 = document.getElementById("myChart2");
// var ctx2 = viewport2.getContext("2d");

list = generateRandomArr(8, 100)

list1 = list.slice().sort(function(a,b){
            return a - b
        });
list2 = shuffle(list.slice());
list3 = list.slice().sort(function(a,b){
            return b - a
        });

var ciuraGaps = [701, 301, 132, 57, 23, 10, 4, 1];

//not yet final
var randomGaps = generateRandomArr(generateRandomNumber(1, list.length), generateRandomNumber(1,10));

randomGaps.sort(function(a,b){
    return b - a
});

console.log(randomGaps);


var ciuraShellSortGraph = {
    label: 'Shell Sort with Ciura Gaps',
    fill: false,
    data: [
            {x: 0, y: shellSort(list1.slice(), ciuraGaps)},
            {x: 0, y: shellSort(list2.slice(), ciuraGaps)},
            {x: 0, y: shellSort(list3.slice(), ciuraGaps)},
    ],
    borderColor: ['rgba(255,99,132,1)'],
}

console.log("RANDOM");
var randomShellSortGraph = {
    label: 'Shell Sort with Random Gaps',
    fill: false,
    data: [
            {x: 0, y: shellSort(list1.slice(), randomGaps)},
            {x: 0, y: shellSort(list2.slice(), randomGaps)},
            {x: 0, y: shellSort(list3.slice(), randomGaps)},
    ],
    borderColor: ['rgba(99,132,255,1)']
}


// var insertionSortGraph = {
//     label: 'Insertion Sort',
//     fill: false,
//     data: [
//             {x: 0, y: insertionSort(list1.slice())},
//             {x: 0, y: insertionSort(list2.slice())},
//             {x: 0, y: insertionSort(list3.slice())},
//     ],
//     borderColor: ['rgba(99,132,255,1)']
// }

var chartData = {
    type: 'line',
    data: {
        labels: ["Pre-sorted", "Random", "Reverse-sorted"],
        datasets: [ciuraShellSortGraph, randomShellSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
// var myChart2 = new Chart(ctx2, chartData);
