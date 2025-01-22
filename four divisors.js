// Example 1:

// Input: nums = [21,4,7]
// Output: 32
// Explanation:
// 21 has 4 divisors: 1, 3, 7, 21
// 4 has 3 divisors: 1, 2, 4
// 7 has 2 divisors: 1, 7
// The answer is the sum of divisors of 21 only.
// Example 2:

// Input: nums = [21,21]
// Output: 64
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 0

console.log();

// let arr = [1, 21, 5, 6, 8, 4];
// let arr = [21, 4, 7];
let arr = [1, 2, 3, 4, 5];
let s = 0;
for (const e of arr) {
  let sec = [];
  const val = parseInt(Math.sqrt(e));
  for (let i = 1; i <= e; i++) {
    if (e % i == 0) {
      sec.push(i);
    }
  }
  if (sec.length == 4) {
    for (let j = 0; j < sec.length; j++) {
      s += sec[j];
    }
    console.log(sec);
  }
}
console.log(s);
