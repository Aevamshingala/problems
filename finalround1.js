let n = 4;
let m = 5;
let arr1 = [1, 5, 82, 4];
let arr2 = [80, 45, 852, 82, 3, 5];
let k = 5;
// find the maximum Number form both arrays and fill new arr of size k
let finalAns = [];
let max1;
let max2;

function maximum() {
  for (let i = 0; i < k; i++) {
    if (arr1.length == 0 && arr2.length == 0) {
      return finalAns;
    }
    max1 = Math.max(...arr1);
    max2 = Math.max(...arr2);

    if (max1 > max2) {
      finalAns.push(max1);
      arr1 = arr1.filter((e) => e != max1);
    } else if (max1 == max2) {
      finalAns.push(max1);
      arr1 = arr1.filter((e) => e != max1);
      arr2 = arr2.filter((e) => e != max2);
    } else {
      finalAns.push(max2);
      arr2 = arr2.filter((e) => e != max2);
    }
  }
  return finalAns;
}
console.log(maximum());
