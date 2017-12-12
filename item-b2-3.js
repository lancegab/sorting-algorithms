var viewport = document.getElementById("ItemB2-3");
var ctx = viewport.getContext("2d");

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


var ciuraGaps = [701, 301, 132, 57, 23, 10, 4, 1];

var randomGaps = generateRandomArr(generateRandomNumber(1, 8), generateRandomNumber(1,10));

randomGaps.sort(function(a,b){
    return b - a
});

console.log(randomGaps);


var ciuraShellSortGraph = {
    label: 'Shell Sort with Ciura Gaps',
    fill: false,
    data: [
            {x: 0, y: 0},
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
            {x: 0, y: 0},
            {x: 0, y: shellSort(list1.slice(), randomGaps)},
            {x: 0, y: shellSort(list2.slice(), randomGaps)},
            {x: 0, y: shellSort(list3.slice(), randomGaps)},
    ],
    borderColor: ['rgba(99,132,255,1)']
}

var chartData = {
    type: 'line',
    data: {
        labels: [0, list1.length, list2.length, list3.length],
        datasets: [ciuraShellSortGraph, randomShellSortGraph]
    }
}

var myChart = new Chart(ctx, chartData);
