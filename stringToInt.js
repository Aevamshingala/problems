// let a = " 00000000000-3 0010005 !#@$ 234  @";
let a = "456asd0-2";
let val = "";
let temp = false;
let flag = true;
function stringToInt() {
  for (let i = 0; i < a.length; i++) {
    // a[i] == " " ? (a[i + 1] != 0 ? (temp = true) : (temp = false)) : null;
    if (a[i] == "-" && a[i + 1] >= 0 && flag == true && !(a[i - 1] >= 0)) {
      val = "-";
      flag = false;
      continue;
    }
    a[i] > 0 ? (temp = true) : null;
    if (a[i] == "0" && flag == true) {
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
        if (i == a.length - 1) {
          return val;
        }
      }
    }
  }
}
console.log(stringToInt());
