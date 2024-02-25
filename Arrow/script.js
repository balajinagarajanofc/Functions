//Print Odd Numbers in Array.
const OddNum = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
OddNum(arr);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Convert all the strings to title caps in a string array
