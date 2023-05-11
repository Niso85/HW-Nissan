// //option 1: I don't limit the user enter student names
// const Student = [];
// let repeat = true;

// while (repeat) {
//   let studentName = prompt("Enter a student name please: ");
//   if (studentName) {
//     Student.push(studentName.toLowerCase().replace(" ",""));
//     repeat = confirm("Do you want add another student?");
//   } else {
//     repeat = false;
//   }
// }

// if (Student.length > 0) {
//   alert("Here are all students after sorting: " + Student.sort().join(", "));
// } else {
//   alert("There is no list to show!");
// }

// //option 2: the user can enter 5 names only
const Students = [];

for (let i = 0; i < 5; i++) {
  let studentName = prompt("Enter a student name please: ");
  Students.push(studentName.toLowerCase().replace(" ",""));
}
alert("Here are all students after sorting: " + Students.sort().join(", "));


