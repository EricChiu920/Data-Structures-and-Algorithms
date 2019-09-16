// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
// function stepper(nums, memo = {}) {
//     const key = nums.length;
//     if (key in memo) return memo[key];
//     if (nums.length === 0) return true;

//     for (let i = 1; i <= nums[0]; i += 1) {
//         if (stepper(nums.slice(i), memo)) {
//             memo[key] = true;
//             return memo[key];
//         }
//     }

//     memo[key] = false;
//     return memo[key];
// }
function stepper(nums) {
  const table = new Array(nums.length).fill(false);
  table[0] = true;

  for(let i = 0; i < nums.length; i += 1) {
    if (!table[i]) {
      break;
    }

    for (let j = i; j < table.length && j <= i + nums[i]; j += 1) {
      table[j] = true;
    }
  }

  return table[table.length - 1]
}

console.log(stepper([3, 1, 0, 5, 10]));           // => true, because we can step through elements 3 -> 5 -> 10


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// console.log(maxNonAdjacentSum([4, 2, 1, 6]));   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
// function maxNonAdjacentSum(nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length < 3) return Math.max(...nums);
//     const copyNums = nums.slice(0);

//     copyNums[2] += copyNums[0];
//     for (let i = 3; i < copyNums.length; i += 1) {
//         const max = Math.max(copyNums[i - 2], copyNums[i - 3]);
//         copyNums[i] += max;
//     }

//     return Math.max(copyNums[copyNums.length - 1], copyNums[copyNums.length - 2]);
// }

function maxNonAdjacentSum(nums, memo = {}) {
    const key = nums.length;
    if (key in memo) return memo[key];
    if (nums.length === 0) return 0;


    const sumWithFirstNum = nums[0] + maxNonAdjacentSum(nums.slice(2), memo);
    const sumWithoutFirstNum = maxNonAdjacentSum(nums.slice(1), memo);

    memo[key] = Math.max(sumWithFirstNum, sumWithoutFirstNum);
    return memo[key];
}

// function maxNonAdjacentSum(nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length < 3) return Math.max(...nums);

//     const table = [];
//     table[0] = nums[0];
//     table[1] = nums[1] > table[0] ? nums[1] : table[0];

//     for (let i = 2; i < nums.length; i += 1) {
//         const includeNum = table[i - 2] + nums[i];
//         const notIncludeNum = table[i - 1];

//         const max = Math.max(includeNum, notIncludeNum);
//         table.push(max);
//     }

//     return table[table.length - 1];
// }

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// console.log(minChange([1, 2, 5], 11));         // => 3, because 5 + 5 + 1 = 11
// console.log(minChange([1, 4, 5], 8));         // => 2, because 4 + 4 = 8
// console.log(minChange([1, 5, 10, 25], 15))    // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100))   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);

    table[0] = 0;
    for (let i = 0; i < coins.length; i += 1) {
        for (let j = 0; j < table.length - coins[i]; j += 1) {
            if (table[j] === undefined) continue;
            if (table[j + coins[i]] > table[j] + 1) {
                table[j + coins[i]] = table[j] + 1;
            }
        }
    }

    const last = table.length - 1;
    return table[last];
}

module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};