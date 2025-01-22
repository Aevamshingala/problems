let a = " 3 !#@$ 234  @#%^*&456  sfdds00001506 dsf 1546 15 1 5 2";
let val = "";

function stringToInt() {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "0") {
      if (
        !isNaN(a[i + 1]) &&
        !isNaN(a[i - 1]) &&
        a[i + 1] != 0 &&
        a[i - 1] != 0
      )
        val += a[i];
      else continue;
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
