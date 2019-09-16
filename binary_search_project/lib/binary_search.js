function binarySearch(array, target) {
    if (array.length === 0) return false;

    const midIdx = Math.floor(array.length / 2);
    const midEle = array[midIdx];

    if (target < midEle) {
        return binarySearch(array.slice(0, midIdx), target);
    } else if (midEle === target) {
        return true;
    } else {
        const shiftedIdx = midIdx + 1;
        return binarySearch(array.slice(shiftedIdx), target);
    }
}

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
    if (lo === hi || lo > hi) return -1;

    const midIdx = Math.floor((lo + hi) / 2);
    const midEle = array[midIdx];

    if (target < midEle) {
        return binarySearchIndex(array, target, lo, midIdx);
    } else if (target === midEle) {
        return midIdx;
    } else {
        return binarySearchIndex(array, target, midIdx + 1, hi);
    }


    // if (array.length === 0) return -1;

    // const midIdx = Math.floor(array.length / 2);
    // const midEle = array[midIdx];

    // if (target < midEle) {
    //     return binarySearchIndex(array.slice(0, midIdx), target);
    // } else if (midEle === target) {
    //     return midIdx;
    // } else {
    //     const shiftedIdx = midIdx + 1;
    //     const res = binarySearchIndex(array.slice(shiftedIdx), target);
    //     return res === -1 ? -1 : res + shiftedIdx;
    // }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};