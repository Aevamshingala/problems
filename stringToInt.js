let a = " 000000000003 10005 !#@$ 234  @";  // out put is 310005
let val = "";
let temp = false;

function stringToInt() {
  for (let i = 0; i < a.length; i++) {
    a[i] == " " ? (a[i + 1] != 0 ? (temp = true) : (temp = false)) : null;

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
