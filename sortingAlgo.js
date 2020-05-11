
function bubbleSortNextIteration() {
    console.log("counte start", arLength);
    console.log("Time out started");

    var temp = arr[j];
    if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
    j++;
    console.log("arr", arr);
    var element = document.getElementById("row");
    element.parentNode.removeChild(element);
    var row = document.createElement("div");
    row.className = "row container";
    row.id = "row";
    document.getElementById('parent').appendChild(row);
    for (var i = 0; i < arr.length; i++) {
        var col = document.createElement("td");   // Create a <button> element
        col.className = "column";
        col.id = "col" + i;
        document.getElementById('row').appendChild(col);
        var bar = document.createElement("div");
        bar.innerHTML = i;
        bar.innerHTML = arr[i];
        bar.id = "bar" + i;
        bar.className = "bar";
        bar.style.height = arr[i];
        console.log("ele", arr);
        document.getElementById("col" + i).appendChild(bar);
    }

    arLength--;
    console.log("conter", arLength);

    if (arLength <= 0) {
        clearInterval(interval);
        console.log("loop called");
    }

}


function bubbleSortFirstIteration() {
    arLength = arr.length;
    j = 0;
    var interval = setInterval(bubbleSortNextIteration, 1000);
    arLength--;
    if (arLength <= 0) {
        clearInterval(intTwo);
        console.log("loop 2 called");
    }
}



function quickSort(arr, low, high) {
    if (low < high) {
        var { t } = partition(arr, low, high);
        var { animation } = partition(arr, low, high);

        quickSort(arr, t + 1, high)
        quickSort(arr, low, t - 1)
    }
    console.log("array of arrays", animation);
    return animation;
}

var temp = 0;
function partition(arr, low, high) {
    var t = low - 1;
    var pivot = arr[high];


    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            t++;
            temp = arr[t];
            arr[t] = arr[j];
            arr[j] = temp;
        }
        animation[iterations] = arr.slice(0);
        iterations++;
    }

    //   swap(arr[t + 1], arr[j]);
    temp = arr[t + 1];
    arr[t + 1] = arr[j];
    arr[j] = temp;





    console.log("quick", arr);
    console.log("quick arra", animation);
    t++;
    return { t, animation };
}


