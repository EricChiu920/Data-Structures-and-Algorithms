// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// var change = function (amount, coins, memo = {}) {
//   if (amount === 0) return 1;

//   let totalWays = 0;
//   const currentCoin = coins[coins.length - 1];
//   for (let qty = 0; qty * currentCoin <= amount; qty += 1) {
//     totalWays += change(amount - qty * currentCoin, coins.slice(0, -1))
//   }

//   return totalWays;
// };

var change = function (amount, coins, memo = {}) {
  const key = amount + '-' + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let totalWays = 0;
  const currentCoin = coins[coins.length - 1];
  for (let qty = 0, value = qty * currentCoin; value <= amount; qty += 1, value += currentCoin) {
    totalWays += change(amount - value, coins.slice(0, -1), memo);
  }

  memo[key] = totalWays;
  return memo[key];
};

console.log(change(5, [1, 2, 5]));
