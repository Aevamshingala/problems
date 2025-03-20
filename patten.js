let a = [
  [1, 2, 3, 10, 20],
  [4, 5, 6, 11, 21],
  [7, 8, 9, 12, 22],
  [30, 31, 32, 33, 34],
];
let n = a.length;
let di = 0;
const m = a[0].length;
let bool = true;
for (let i = 0; bool; i++) {
  let k = n - 1;
  let p = 0;
  for (let j = 0; j < n; j++) {
    if (j == 0) k = di;
    console.log(a[p][k] || "");
    if (k == m - 1 && p == n - 1) {
      bool = false;
    }
    if (k == 0) break;
    p++;
    k--;
  }
  console.log("*********");
  di++;
}

// 00,
// 10,01,
// 20,11,02,
// 12,21,
// 22
// i == j || j > i //123569
// i == j || j < i //145789
// i != j || j < i //478
// i != j || j > i //236
