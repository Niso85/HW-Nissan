const Student = [];
let repeat = true;

while (repeat) {
  let studentName = prompt("Enter a student name please: ");
  if (studentName) {
    Student.push(studentName.toLowerCase().replace(" ",""));
    repeat = confirm("Do you want add another student?");
  } else {
    repeat = false;
  }
}

if (Student.length > 0) {
  alert("Here are all students after sorting: " + Student.sort().join(", "));
} else {
  alert("There is no list to show!");
}
