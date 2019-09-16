function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];

    return array
}

function bubbleSort(array) {
    let sorted = false

    while (!sorted) {
        sorted = true;

        for(let i = 1; i < array.length; i += 1) {
            if (array[i] < array[i - 1]) {
                array = swap(array, i, i - 1);
                sorted = false;
            }
        }
    }

    return array;
}


module.exports = {
    bubbleSort,
    swap
};