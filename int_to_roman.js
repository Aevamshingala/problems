// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

var intToRoman = function (num) {
  let splitednum = [];
  let newnum = [];
  let i = 0;
  splitednum = num.toString().split("");
  const sl = splitednum.length;
  while (i < sl) {
    let multiplay;
    if (splitednum.length == 1) {
      newnum.push(parseInt(splitednum[0]));
    } else if (splitednum.length == 2) {
      multiplay = 10;
    } else if (splitednum.length == 3) {
      multiplay = 100;
    } else if (splitednum.length == 4) {
      multiplay = 1000;
    }

    newnum.push(splitednum.shift() * multiplay);
    i++;
  }

  let output = "";
  for (let i = 0; i < newnum.length; i++) {
    const val = parseInt(newnum[i].toString().split("").shift());

    if (newnum[i].toString().length == 1) {
      // check the first number between 1 to 3 or 4 or five or 5 to 8 or 9
      if (val >= 1 && val <= 3) {
        for (let i = 0; i < val; i++) {
          output += "i";
        }
      } else if (val == 4) {
        output += "iv";
      } else if (val == 5) {
        output += "v";
      } else if (val > 5 && val <= 8) {
        output += "v";
        for (let i = 0; i < val - 5; i++) {
          output += "i";
        }
      } else if (val == 9) {
        output += "ix";
      }
    } else if (newnum[i].toString().length == 2) {
      // check the first number between 1 to 3 or 4 or five or 5 to 8 or 9
      if (val >= 1 && val <= 3) {
        for (let i = 0; i < val; i++) {
          output += "x";
        }
      } else if (val == 4) {
        output += "xl";
      } else if (val == 5) {
        output += "l";
      } else if (val > 5 && val <= 8) {
        output += "l";
        for (let i = 0; i < val - 5; i++) {
          output += "x";
        }
      } else if (val == 9) {
        output += "xc";
      }
    } else if (newnum[i].toString().length == 3) {
      // check the first number between 1 to 3 or 4 or five or 5 to 8 or 9 or 10
      if (val >= 1 && val <= 3) {
        for (let i = 0; i < val; i++) {
          output += "c";
        }
      } else if (val == 4) {
        output += "cd";
      } else if (val == 5) {
        output += "d";
      } else if (val > 5 && val <= 8) {
        output += "d";
        for (let i = 0; i < val - 5; i++) {
          output += "c";
        }
      } else if (val == 9) {
        output += "cm";
      }
    } else if (newnum[i].toString().length == 4) {
      // check the first number between 1 to 3 or 4 or five or 5 to 8 or 9 or 10
      if (val >= 1 && val <= 3) {
        for (let i = 0; i < val; i++) {
          output += "m";
        }
      }
    }
  }
  console.log(output.toUpperCase());
  return output.toUpperCase();
};

intToRoman(3749);
