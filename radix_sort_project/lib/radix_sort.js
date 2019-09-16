const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / 10 ** place) % 10;
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i += 1) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }

    return maxDigits;
}

const defaultBuckets = {
    0: [],                     
    1: [],      
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
};

function radixSort(arr) {
    if (!(arr instanceof Array)) return null;
    // let sortArr = arr.slice();

    const maxDigits = getMaxDigits(arr);
    
    for (let i = 0; i < maxDigits; i += 1) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j += 1) {
            const digit = (i < getIntLength(arr[j])) ? getDigitFrom(arr[j], i) : 0;
            buckets[digit].push(arr[j]);
        }

        arr = [].concat(...buckets);
    }
    
    return arr
}

module.exports = {
    radixSort
};