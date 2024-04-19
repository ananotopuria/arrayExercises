// დავალება #1

// const array = ['Hi', 'Hello', 'Ola', 'Aloha', 'Privet', 'Gamarjoba'];

// თქვენი დავალებაა ამ მასივიდან ამოიღოთ პირველი 5 ელემენტი და ჩაწეროთ მასივში:
// const firstFive = [];

// for(let i = 0; i < 5; i++) {
// firstFive[firstFive.length] = array[i];
// }

// console.log(firstFive);

// დავალება#2

// const array = ['Hi', 'Hello', 'Ola', 'Aloha', 'Privet', 'Gamarjoba'];

// თქვენი დავალებაა ამ მასივიდან ამოიღოთ ბოლო 5 ელემენტი და ჩაწეროთ მასივში:
// const lastFive = [];

// for(let i = array.length - 1; i >= array.length - 5; i--){
// lastFive[lastFive.length] = array[i];
// }

// console.log(lastFive)

// დავალება #3
// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// თქვენი დავალებაა ამ მასივიდა ამოიღოთ ყველა ელემენტი გარდა პირველი 2-ისა და ჩაწეროთ მასივში:
// const newArray = [];

// for (let i = 2; i < array.length; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray);

// დავალება #4

// const array = ['Hi', 'Hello', 'Ola', 'Aloha', 'Privet', 'Gamarjoba'];
// თქვენი დავალებაა ამ მასივიდა ამოიღოთ ყველა ელემენტი გარდა ბოლო 2-ისა და ჩაწეროთ მასივში:

// const newArray = [];

// for(let i = 0; i < array.length - 2; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray)

// შემდეგ დავალებებში n ცვლადის სხვადასხვა მნიშვნელობაზე უნდა მუშაობდეს თქვენი კოდი მაგალითად თუ ნ იქნება 2 უნდა
// ამოიღოს პირველი ორი მნიშვნელობა თუ იქნება 5 მაშნ პირველი ხუთი

// 5. პირველი რამდენიმე
// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 2;

// const newArray = [];

// for (let i = 0; i < n; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray);

// 6. ბოლო რამდენიმე

// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 2;
// const newArray = [];

// for(let i = array.length - 1; i >= array.length - n; i--){
// newArray[newArray.length] = array[i];
// }

// console.log(newArray);

// 7. პირველი n ის გარდა
// const array = ["Hi", "Hello", "Ola", "Aloha", "Privet", "Gamarjoba"];
// const n = 3;
// const newArray = [];

// for (let i = n; i < array.length; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray);

// 8. ბოლო n ის გარდა

// const array = ['Hi', 'Hello', 'Ola', 'Aloha', 'Privet', 'Gamarjoba'];
// const newArray = [];
// const n = 2;
// for(let i = 0; i < array.length - n; i++) {
//   newArray[newArray.length] = array[i];
// }

// console.log(newArray)

// 9.
const universitiesData = [
  {
    university: "University of Oxford",
    location: "Oxford, England",
    established: 1096,
    departments: [
      { name: "Physics", chair: "Dr. Emily Stark" },
      { name: "Philosophy", chair: "Dr. John Locke" },
    ],
    notable_alumni: [
      { name: "Stephen Hawking", degree: "PhD, Physics" },
      { name: "Oscar Wilde", degree: "BA, English" },
    ],
  },
  {
    university: "Harvard University",
    location: "Cambridge, MA, USA",
    established: 1636,
    departments: [
      { name: "Economics", chair: "Dr. Lisa Genova" },
      { name: "Biology", chair: "Dr. Charles Darwin" },
    ],
    notable_alumni: [
      { name: "Barack Obama", degree: "JD, Law" },
      { name: "Mark Zuckerberg", degree: "Dropped out" },
    ],
  },
  {
    university: "Stanford University",
    location: "Stanford, CA, USA",
    established: 1885,
    departments: [
      { name: "Computer Science", chair: "Dr. Ada Lovelace" },
      { name: "Chemical Engineering", chair: "Dr. Marie Curie" },
    ],
    notable_alumni: [
      { name: "Elon Musk", degree: "BS, Physics" },
      { name: "Reed Hastings", degree: "MS, Computer Science" },
    ],
  },
  {
    university: "University of Tokyo",
    location: "Tokyo, Japan",
    established: 1877,
    departments: [
      { name: "Law", chair: "Dr. Kenji Fuji" },
      { name: "Medicine", chair: "Dr. Yoko Ono" },
    ],
    notable_alumni: [
      { name: "Shinzo Abe", degree: "Political Science" },
      { name: "Kazuo Ishiguro", degree: "Bachelor in English" },
    ],
  },
  {
    university: "University of Cape Town",
    location: "Cape Town, South Africa",
    established: 1829,
    departments: [
      { name: "Anthropology", chair: "Dr. Nelson Mandela" },
      { name: "Astronomy", chair: "Dr. Sarah Fortune" },
    ],
    notable_alumni: [
      { name: "Desmond Tutu", degree: "Master's in Theology" },
      { name: "Elon Musk", degree: "Attended, did not graduate" },
    ],
  },
];

// მოცემულ ობიექტს გადაურბინეთ ფორ ლუპით და const universityNames = []  <<< ამ არაიში ჩასეტეთ ყველა უნივერისიტეტის სახელი
// console.log(universityNames); // expected output
// [
//     "University of Oxford",
//     "Harvard University",
//     "Stanford University",
//     "University of Tokyo",
//     "University of Cape Town"
// ]

// const universityNames = [];

// for (let i = 0; i < universitiesData.length; i++) {
//   universityNames[universityNames.length] = universitiesData[i].university;
// }

// console.log(universityNames);

// Bonus davaleba: unda gamoiyenot chanestili for loopi anu ori for loop

// const departmentNames = []; << ამ არაიში უნდა ჩასეტოთ ყველა დეპარტამენტი

// console.log(departments) // expected output :

// [
//     "Physics",
//     "Philosophy",
//     "Economics",
//     "Biology",
//     "Computer Science",
//     "Chemical Engineering",
//     "Law",
//     "Medicine",
//     "Anthropology",
//     "Astronomy"
// ]

// const departmentNames = [];

// for (let i = 0; i < universitiesData.length; i++) {
//   const departments = universitiesData[i].departments;
//   for (let j = 0; j < departments.length; j++) {
//     departmentNames[departmentNames.length] = departments[j].name;
//   }
// }

// console.log(departmentNames);
