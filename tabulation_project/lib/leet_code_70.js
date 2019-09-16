// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n, steps = [1, 2]) {
  if (n === 0) return 1;

  const totalWays = 0;
  const currentStep = steps[steps.length - 1];
  for (let i = 0; currentStep * i <= n; i += 1) {
    totalWays += climbStairs(n, steps.slice(0, -1));
  }

  return totalWays;
}