`use strict';`;

// 1. შექმენით ფუნქცია რომელსაც ექნება ერთი პარამეტრი
// არრაი და აბრუნებს ამ არაიში არსებული ლუწი რიცხვების ჯამს

// function sumOfEven(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumOfEven([4, 5, 6]));
// console.log(sumOfEven([4, 2, 6, 10]));
// console.log(sumOfEven([5, 5, 3, 7]));

// 2. შექმენით ფუნქცია რომელსაც ექნება ერთი პარამეტრი
// არრაი დდა აბრუნებს არაიში არსებული კენტი რიცხვების ჯამს

// function sumOfOdd (arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// console.log(sumOfOdd([4, 5, 6]));
// console.log(sumOfOdd([4, 2, 6, 10]));
// console.log(sumOfOdd([5, 5, 3, 7]));

// 3. შექმენით ფუნქცია რომელიც იღებს 2 პარამეტრს 1. არაი 2.
// არაი და გამოითვლის პირველ არაიში არსებული კენტი რიცხვების ჯამსა
// და მეორე არაიში არსებულ ლუწი რიცხვების ჯამს შორის სხვაობას.

// function calculateOddSumAndEvenDiff(arr1, arr2) {
//   function calculateSumOfOdd(arr1) {
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] % 2 !== 0) {
//         sum += arr1[i];
//       }
//     }
//     return sum;
//   }
//   function calculateSumOfEven(arr2) {
//     let sum = 0;
//     for (let i = 0; i < arr2.length; i++) {
//       if (arr2[i] % 2 === 0) {
//         sum += arr2[i];
//       }
//     }
//     return sum;
//   }
//   return calculateSumOfOdd(arr1) - calculateSumOfEven(arr2);
// }

// console.log(calculateOddSumAndEvenDiff([5], [4]));
// console.log(calculateOddSumAndEvenDiff([4, 5, 5, 5, 3, 6], [4, 5, 6]));
// console.log(calculateOddSumAndEvenDiff([4, 2, 6, 10], [4, 2, 6, 10]));
// console.log(calculateOddSumAndEvenDiff([4, 5, 8, 5, 9, 99, 4, 6], [4, 6, 6, 5, 6]));

// 4. შექმენით ფუნქცია რომელსაც გადასცემთ ორ პარამეტრს არაის და n ს.
// ფუნქციამ უნდა დააბრუნოს არაის იმ ელემენტების
// ჯამი რომელიც ნ რიცხვისი ჯერადია

// function findMultiplesOfN(arr, n) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % n === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(findMultiplesOfN([3, 15, 30, 6, 7, 8], 3));
// console.log(findMultiplesOfN([100, 99, 200], 10));

// 5. შექმენით ფუნქცია რომელიც იღებს ორ არაის და აბრუნებს
// ერთს რომელშიც მოცემული იქნება ამ ორი არაიდან ამოღებული ლუწი რიცხვები

// function arrOfEvenNumbers(arr1, arr2) {
//   const firstArr = [];
//   const secondArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//       firstArr.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//       secondArr.push(arr2[i]);
//     }
//   }
//   return firstArr.concat(secondArr);
// }

// console.log(arrOfEvenNumbers([3, 4, 5, 6, 7, 8], [2, 4, 6, 8, 10]));
// console.log(
//   arrOfEvenNumbers([3, 4, 5, 6, 7, 10, 5, 5, 5, 8], [2, 4, 6, 8, 10])
// );

// 6. შექმენი ფუნქცია რომელიც იღებს არაის პარამეტრად
//და აბრუნებს ობიექტს სამი რომელსაც ექნება სამი ქი

// function calculateArrayStats(arr) {
//   let sumOfOddNumbers = 0;
//   let sumOfEvenNumbers = 0;
//   let sumOfAllElements = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sumOfAllElements += arr[i];
//     if (arr[i] % 2 === 0) {
//       sumOfEvenNumbers += arr[i];
//     } else {
//       sumOfOddNumbers += arr[i];
//     }
//   }

//   return {
//     sumOfOddNumbers: sumOfOddNumbers,
//     sumOfEvenNumbers: sumOfEvenNumbers,
//     sumOfAllElements: sumOfAllElements,
//   };
// }

// console.log(calculateArrayStats([1,2,3,4,5,6,7,8,9,10]));