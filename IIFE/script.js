//Print Odd Numbers in Array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (OddNumber) {
  for (let i = 0; i < OddNumber.length; i++)
    if (OddNumber[i] % 2 !== 0) {
      console.log(OddNumber[i]); // printing all Odd Numbers
    }
})(arr);
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Convert all the strings to title caps in a string array

let tCaps = (function (string) {
  string = string.toLowerCase().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join(" ");
})("as usual hello world!");

console.log(tCaps);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Sum of all numbers in an array
let result = (function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
})(arr);

console.log(result);
