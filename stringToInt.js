// // let a = " 00000000000-3 0010005 !#@$ 234  @";
// let a = "-00010";
// let val = "";
// let temp = false;
// let flag = true;
// function stringToInt() {
//   for (let i = 0; i < a.length; i++) {
//     console.log(i, "iiiiiii");

//     // a[i] == " " ? (a[i + 1] != 0 ? (temp = true) : (temp = false)) : null;
//     if (a[i] == "-" && a[i + 1] >= 0 && flag == true && !(a[i - 1] >= 0)) {
//       val = "-";
//       flag = false;
//       continue;
//     }
//     a[i] > 0 ? (temp = true) : null;
//     if (a[i] == "0" && flag == true) {
//       if (
//         (!isNaN(a[i + 1]) &&
//           !isNaN(a[i - 1]) &&
//           a[i + 1] != 0 &&
//           a[i - 1] != 0) ||
//         temp
//       ) {
//         // console.log(a[i], i, "a of i");
//         val += a[i];
//       }
//     } else {
//       if (a[i] == " ") continue;
//       else {
//         if (isNaN(a[i])) return val || 0;
//         else val += a[i];
//       }
//     }
//     if (i == a.length - 1) {
//       return val;
//     }
//   }
// }
// console.log(stringToInt());
var myAtoi = function (s) {
  let val = "";
  let temp = false;
  let flag = true;
  s = s.trim();
  if (s.length == 0) return 0;
  if (parseInt(s) >= 2147483648) {
    return 2147483647;
  }
  if (parseInt(s) <= -2147483648) {
    return -2147483648;
  }
  let srr = [...s];
  if (srr.every((e) => e == 0)) {
    return 0;
  }

  if ((s[0] == "+" || s[0] == "/" || s[0] == "*") && s[1] == " ") return 0;
  let spaarr = s.split(" ");
  if (spaarr.length > 1) {
    if (
      spaarr[0].startsWith("+") ||
      spaarr[0].startsWith("*") ||
      spaarr[0].startsWith("/")
    )
      spaarr[0] = spaarr[0].slice(1);

    if (
      typeof spaarr[0] == "string" &&
      Number(spaarr[0]) == spaarr[0] &&
      spaarr[0] != ""
    ) {
      return parseInt(spaarr[0]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (
      (s[0] == "+" || s[0] == "*" || s[0] == "/" || s[0] == "-") &&
      (s[1] == "+" || s[1] == "*" || s[1] == "/" || s[1] == "-")
    )
      return 0;
    if (s[0] == "+" || s[0] == "*" || s[0] == "/") s = s.replace(s[0], "");
    if (s[i] == "-" && s[i + 1] >= 0 && flag == true && !(s[i - 1] >= 0)) {
      val = "-";
      flag = false;
      continue;
    }
    s[i] > 0 ? (temp = true) : null;
    if (s[i] == "0" && flag == true) {
      if (
        (!isNaN(s[i + 1]) &&
          !isNaN(s[i - 1]) &&
          s[i + 1] != 0 &&
          s[i - 1] != 0) ||
        temp
      ) {
        val += s[i];
      }
    } else {
      if (s[i] == " ") continue;
      else {
        if (isNaN(s[i])) return parseInt(val) || 0;
        else val += s[i];
      }
    }
    if (i == s.length - 1) {
      return parseInt(val);
    }
  }
};
console.log(typeof myAtoi("   -042"));
