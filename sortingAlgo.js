
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


    arLength--;
    console.log("conter", arLength);



}


function bubbleSortFirstIteration(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            temp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            animation[iterations] = arr.slice(0);
            iterations++;
            console.log("bubble", animation);
        }
    }
    return animation;
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

function mergeSort(arr, l, r) {
    var m, i = 0, j = 0, k = 0;
    if (l < r) {
        m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
        return animation;
    }
}

function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var k = 0, i = 0, j = 0;
    var temp1 = [];
    var temp2 = [];

    for (i = 0; i < n1; i++) {
        temp1[i] = arr[l + i];
    }
    for (j = 0; j < n2; j++) {
        temp2[j] = arr[m + 1 + j];
    }

    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    while (i < n1 && j < n2) {
        if (temp1[i] < temp2[j]) {
            arr[k] = temp1[i];
            i++;
        }
        else {
            arr[k] = temp2[j];
            j++;

        }
        animation[iterations] = arr.slice(0);
        iterations++;
        k++;
    }
    while (i < n1) {
        arr[k] = temp1[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = temp2[j];
        j++;
        k++;
    }

    animation[iterations] = arr.slice(0);
    iterations++;
    console.log("merge", animation);
    return animation;
}

function heapSort(arr, n) {
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (var i = n - 1; i > 0; i--) {
        console.log(swap(10, 20));
        // swap(arr[0], arr[i]);
        // console.log(swap(arr[0], arr[i]));
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return animation;
}

function heapify(arr, n, i) {

    var larget = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    var temp;
    if (l < n && arr[larget] < arr[l]) {
        larget = l;
    }
    if (r < n && arr[larget] < arr[r]) {
        larget = r;
    }
    animation[iterations] = arr.slice(0);
    iterations++;
    console.log("heap", animation);
    if (larget != i) {
        console.log(swap(10, 20));
        //  swap(arr[i], arr[larget]);
        temp = arr[i];
        arr[i] = arr[larget];
        arr[larget] = temp;
        heapify(arr, n, larget);
    }
}

function swap(a, b) {

    return [b, a]
}