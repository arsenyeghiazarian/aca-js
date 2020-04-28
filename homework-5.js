function binarySearch(arr, value) {
    let min = 0, max = arr.length - 1;
    let average;
    while(min <= max) {
        average = Math.floor((max + min)/2)
        if(arr[average] === value) {
            return average
        } else if(arr[average] < value) min = average + 1
        else max = average - 1
    }
}