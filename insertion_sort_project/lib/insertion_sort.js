function insertionSort(arr) {
    for (let i = 1; i < arr.length; i += 1) {
        const currentEle = arr[i];
        let j;
        for (j = i - 1; j >= 0 && currentEle < arr[j]; j -= 1) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentEle;
    }

    return arr;
}

module.exports = {
    insertionSort
};