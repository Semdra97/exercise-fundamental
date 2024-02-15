function triangel(heigh) {
  let hasil = "";
  for (i = 1; i <= heigh; i++) {

    for (j = 1; j <= i; j++) {
      hasil += ""+(j);
    }
    hasil += `\n`;
  }
  return hasil;
}

console.log(triangel(5));

///////////////////
function fizzBuzz(n) {
    let result = ""
    for (let i = 0; i <= n; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            result ="fizzBuzz"
        } else if (i % 3 === 0) {
            result = "fiz"
        } else if (i % 5 === 0) {
            result ="buzz"
        } else {
         result = `${i}`
        }
        
    }
    return result;
}

let hasil = fizzBuzz(15);
console.log(hasil);

////////////////////////////

function BMI(berat, tinggi) {
    const bmi = berat / (tinggi * tinggi);
    let result =""
    if (bmi < 18.5) {
        result= "berat lebih sedikit";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result= "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        result= "kelebihan berat badan";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        result= "sangat kelebihan berat badan";
    } else {
        result= "obesitas";
    }
    return result;
}


let berat = 60; 
let tinggi = 1.7; 
let kategori = BMI(berat, tinggi);
console.log(kategori);

////////////////////////////////////

let arr = [1,2,3,4,5,6,7,8,9,10];
let genap = []

for(i=0;i<arr.lenght;i++){
if(arr[i]%2==0){
    genap.push(arr);
}return genap;
}

console.log(genap);