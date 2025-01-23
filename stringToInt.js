let a = " 000000000003 10005 !#@$ 234  @";
let val = "";
let temp = false;

function stringToInt() {
  for (let i = 0; i < a.length; i++) {
    // a[i] == " " ? (a[i + 1] != 0 ? (temp = true) : (temp = false)) : null;
    a[i] > 0 ? (temp = true) : null;
    if (a[i] == "0") {
      if (
        (!isNaN(a[i + 1]) &&
          !isNaN(a[i - 1]) &&
          a[i + 1] != 0 &&
          a[i - 1] != 0) ||
        temp
      ) {
        val += a[i];
      } else continue;
    } else {
      if (a[i] == " ") continue;
      else {
        if (isNaN(a[i])) return val || 0;
        else val += a[i];
      }
    }
  }
}
console.log(stringToInt());

