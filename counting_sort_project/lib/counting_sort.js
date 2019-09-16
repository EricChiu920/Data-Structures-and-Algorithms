function countingSort(arr, max) {
    const table = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i += 1) {
        const num = arr[i];
        table[num] += 1;
    }

    const sortedArray = []
    for (let i = 0; i < table.length; i += 1) {
        for (let j = 0; j < table[i]; j += 1) {
            sortedArray.push(i);
        }
    }

    return sortedArray;
}


module.exports = {
    countingSort
};