function permute(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1);
    console.log("-----------------------------------", newStr, prefix + str[i]);
    permute(newStr, prefix + str[i]);
  }
}

permute("abcd");
