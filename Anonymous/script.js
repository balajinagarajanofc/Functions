//Print Odd Numbers in Array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let OddNum = function (OddNumber) {
  // creating a func named OddNum
  for (
    let i = 0;
    i < OddNumber.length;
    i++ // creating a for loop to get each num in array
  )
    if (OddNumber[i] % 2 !== 0) {
      // creating a condition to check its Odd ot not!
      console.log(OddNumber[i]); // printing all Odd Numbers
    }
};
OddNum(arr);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Convert all the strings to title caps in a string array

function tCaps(string) {
  string = string.toLowerCase().split(" "); // converting all cases into small ones
  for (let i = 0; i < string.length; i++) {
    // getting each letter
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); //using charAt to caps first letter
  }
  return string.join(" ");
}
console.log(tCaps("as usUal helLo woRld!"));

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Sum of all numbers in an array

function fullsum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(fullsum(arr)); // we are using first created array
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

