function quickSort(array) {
    if (array.length <= 1) return array;

    const pivotIdx = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIdx];

    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i += 1) {
        if (i === pivotIdx) continue;
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
}


module.exports = {
    quickSort
};