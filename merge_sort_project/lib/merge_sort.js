function merge(array1, array2) {
    const mergedArray = [];
    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            mergedArray.push(array1.shift());
        } else {
            mergedArray.push(array2.shift());
        }
    }
    return mergedArray.concat(array1).concat(array2);
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const sortedLeft = mergeSort(array.slice(0, mid));
    const sortedRight = mergeSort(array.slice(mid));

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};