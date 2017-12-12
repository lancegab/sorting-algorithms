var viewport = document.getElementById("ItemC-2");
var ctx = viewport.getContext("2d");

list1 = generateRandomArr(50, 1000)
list2 = generateRandomArr(100, 1000)
list3 = generateRandomArr(150, 1000)

list1 = shuffle(list1)
list2 = shuffle(list2)
list3 = shuffle(list3)


var bucketSize = generateRandomNumber(20,100);
label1 = bucketSize + " bucket size"
var bucketSortGraph1 = {
    label: label1,
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: bucketSort(list1.slice(), bucketSize)},
            {x: 0, y: bucketSort(list2.slice(), bucketSize)},
            {x: 0, y: bucketSort(list3.slice(), bucketSize)},
    ],
    borderColor: ['rgba(255,99,132,1)'],
}

bucketSize = generateRandomNumber(20,100);
label2 = bucketSize + " bucket size"
var bucketSortGraph2 = {
    label: label2,
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: bucketSort(list1.slice(), bucketSize)},
            {x: 0, y: bucketSort(list2.slice(), bucketSize)},
            {x: 0, y: bucketSort(list3.slice(), bucketSize)},
    ],
    borderColor: ['rgba(99,255,132,1)'],
    borderWidth: 5
}

bucketSize = generateRandomNumber(20,100);
label3 = bucketSize + " bucket size"
var bucketSortGraph3 = {
    label: label3,
    fill: false,
    data: [
            {x: 0, y: 0},
            {x: 0, y: bucketSort(list1.slice(), bucketSize)},
            {x: 0, y: bucketSort(list2.slice(), bucketSize)},
            {x: 0, y: bucketSort(list3.slice(), bucketSize)},
    ],
    borderColor: ['rgba(99,132,255,1)'],
    borderWidth: 6
}


var chartData = {
    type: 'line',
    data: {
        labels: [0, list1.length, list2.length, list3.length],
        datasets: [bucketSortGraph1, bucketSortGraph2, bucketSortGraph3]
    }
}

var myChart = new Chart(ctx, chartData);
