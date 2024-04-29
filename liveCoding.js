`use strict`;

//1.

function triArea(base, height) {
  return (base * height) / 2;
}

// 2.

function reverse(arr) {
  return arr.reverse();
}

// 3.

function valueAt(arr, i) {
  return arr[Math.floor(i)];
}

// 4.

function arrayValuesTypes(arr) {
  let types = [];
  for (let i = 0; i < arr.length; i++) {
    types.push(typeof arr[i]);
  }
  return types;
}

// 5. დიაგონალების ჯამი

const array = [
  [5, 10, 20],
  [3, 50, 17],
  [0, 18, -10],
];

let sumOfDoagonals =
  array[0][0] +
  array[1][1] +
  array[2][2] +
  array[0][2] +
  array[1][1] +
  array[2][0];

console.log(sumOfDoagonals);

// 6.
// შექმენით ფუნქცია რომელსაც გადაეცემა არაი და აბრუნებს არაიში არსებული
// რიცხვების ჯამს გაითვალისწინეთ რომ არაიში შეიძლება
// იყოს სტრინგ ტაიპებიმაგალითად [1, ‘სალამი’, 2, 44, ‘გამარჯობა’]

function sumOfNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOfNums([1, 2, "lalal"]));

// 7. შექმენით ფუნქცია რომელიც რომელიც მიიღებს ორ პარამეტრს არაის და n ს
// და დააბრუნებს ახალ არაის
// რომელიც შედგებნა n is jeradi ricxvebisgan magalitad

function findMultiplesOfN(arr, n) {
  let multiplies = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % n === 0) {
      multiplies.push(arr[i]);
    }
  }
  return multiplies;
}

console.log(findMultiplesOfN([20, 30, 40], 10));
console.log(findMultiplesOfN([9, 5, 9], 3));

// 8.

function spelling(str) {
  const words = [];
  let letter = "";
  for (let i = 0; i < str.length; i++) {
    letter += str[i];
    words.push(letter);
  }
  return words;
}

console.log(spelling("ბაყაყი"));

// 9. შექმენით ფუნქცია რომელსაც გადაეცემა მსგავსი ობიექტი:

const mentors = [
  {
    id: 101,
    firstName: "გიორგი",
    lastName: "ბერიძე",
    course: "მათემატიკა",
    students: [
      {
        id: 20,
        firstName: "ზურა",
        lastName: "გელაშვილი",
        allScores: [5, 4, 2, 8, 7, 9],
      },
      {
        id: 21,
        firstName: "მარიკა",
        lastName: "თორია",
        allScores: [9, 8, 7, 6, 10],
      },
      {
        id: 22,
        firstName: "ნიკა",
        lastName: "ლაშხი",
        allScores: [6, 9, 8],
      },
      {
        id: 23,
        firstName: "თამარი",
        lastName: "ფიფია",
        allScores: [8, 7, 6, 5, 9, 10, 2],
      },
      {
        id: 24,
        firstName: "გიორგი",
        lastName: "ლაშქარი",
        allScores: [3, 4, 5, 6, 2, 7, 8, 9],
      },
    ],
  },
  {
    id: 202,
    firstName: "ნინო",
    lastName: "გვაზავა",
    course: "ფიზიკა",
    students: [
      {
        id: 25,
        firstName: "ეკა",
        lastName: "ფრანგული",
        allScores: [2, 7, 9, 8, 5, 4],
      },
      {
        id: 26,
        firstName: "დავითი",
        lastName: "ხარაზიშვილი",
        allScores: [8, 5, 7, 6, 2, 9],
      },
      {
        id: 27,
        firstName: "სალომე",
        lastName: "ფატალი",
        allScores: [4, 5, 6, 7, 8],
      },
      {
        id: 28,
        firstName: "ლევანი",
        lastName: "ბეგიაშვილი",
        allScores: [6, 7, 9, 2, 1, 3, 5, 4],
      },
    ],
  },
  {
    id: 303,
    firstName: "მარია",
    lastName: "კვირიკაშვილი",
    course: "ბიზნესის მართვა",
    students: [
      {
        id: 29,
        firstName: "ლელა",
        lastName: "ტაბატაძე",
        allScores: [8, 9, 7, 5, 4],
      },
      {
        id: 30,
        firstName: "ნიკოლოზი",
        lastName: "ბუბუბუ",
        allScores: [5, 6, 7, 8, 9, 10],
      },
      {
        id: 31,
        firstName: "ირინე",
        lastName: "მენაბდე",
        allScores: [9, 8, 7, 6, 5],
      },
      {
        id: 32,
        firstName: "მარიამი",
        lastName: "გიორგიშვილი",
        allScores: [2, 3, 4, 5, 1],
      },
      {
        id: 33,
        firstName: "გიორგი",
        lastName: "მარიანი",
        allScores: [5, 4, 3, 2, 1],
      },
    ],
  },
  {
    id: 404,
    firstName: "იაკობი",
    lastName: "გელაძე",
    course: "საუბარის კლუბი",
    students: [
      {
        id: 34,
        firstName: "სოფია",
        lastName: "მიქავა",
        allScores: [7, 6, 8, 5, 4],
      },
      {
        id: 35,
        firstName: "დათა",
        lastName: "გიორგაძე",
        allScores: [5, 6, 7, 8],
      },
      {
        id: 36,
        firstName: "მარიკო",
        lastName: "თევზაძე",
        allScores: [7, 8, 9, 6, 5, 4, 3],
      },
      {
        id: 37,
        firstName: "ელენე",
        lastName: "ბერულავა",
        allScores: [2, 7, 5, 9, 8],
      },
      {
        id: 38,
        firstName: "მამუკა",
        lastName: "ტყემალაძე",
        allScores: [8, 7, 6, 5, 4],
      },
    ],
  },
];

// და აბრუნებს მენტორთა სახელისა და გვარებისაგან შემდგარ არაის
// expected output [‘გიორგი ბერიძე’, ‘ნინო გვაზავა’, ‘მარია კვირიკაშვილი’,  ‘იაკობი გელიძე’]

function lecturers(arr) {
  const firstNameAndLastName = [];
  for (let i = 0; i < arr.length; i++) {
    const mentor = arr[i];
    const fullName = `${mentor.firstName} ${mentor.lastName}`;
    firstNameAndLastName.push(fullName);
  }
  return firstNameAndLastName;
}

const result = lecturers(mentors);
console.log(result);

// 10.

// შექმენით ფუნქცია რომელიც მიიღებს მსგვს ობიექტს  და აბრუნებს არაის
//  სადაც თითო მენტორის ყველა სტუდენტის ქულათა ჯამები იქნებაანუ
// ამ შემთხვევაში 4 ელემენტიანი არაი უნდა დააბრუნოს

function calculateTotalPoints(arr) {
  const totalPointsArray = [];

  for (let i = 0; i < arr.length; i++) {
    const mentor = arr[i];
    let totalPoints = 0;
    for (let j = 0; j < mentor.students.length; j++) {
      const student = mentor.students[j];
      for (let k = 0; k < student.allScores.length; k++) {
        totalPoints += student.allScores[k];
      }
    }
    totalPointsArray.push(totalPoints);
  }

  return totalPointsArray;
}


console.log(calculateTotalPoints(mentors));
