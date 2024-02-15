function triangel(heigh) {
  let hasil = "";
  for (i = 1; i < heigh; i++) {
    for (j = 1; (j = i); j++) {
      hasil += j;
    }
    hasil += `\n`;
  }
  return hasil;
}

let hasil = triangel;
console.log(hasil(5));

////////////////
function fiz(n) {
  let result = "";
  for (i = 0; i < n; i++) {
    if (3 % 2) {
      result = `fizz`;
    } else if (5 % 2) {
      result = `buzz`;
    }
  }
  return result;
}

console.log(fiz(12));
