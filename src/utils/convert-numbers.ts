function value(r: string) {
  if (r == "i") return 1;
  if (r == "v") return 5;
  if (r == "x") return 10;
  return -1;
}

export function romanToDecimal(str: string) {
  var res = 0;

  for (let i = 0; i < str.length; i++) {
    var s1 = value(str.charAt(i));
    if (i + 1 < str.length) {
      var s2 = value(str.charAt(i + 1));

      if (s1 >= s2) {
        res = res + s1;
      } else {
        res = res + s2 - s1;
        i++;
      }
    } else {
      res = res + s1;
    }
  }

  return res;
}
