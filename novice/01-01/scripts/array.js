let number = new Array(2, 3, 4);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);
// console.log("input kebanyakan");

function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
      result *= base;
    return result;
  }

  console.log(power(2,4));
  