function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let min = arr[i];
        let minIndex = i;
        let j;
        for (j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }

    return arr;
}

module.exports = {
    selectionSort,
    swap
};