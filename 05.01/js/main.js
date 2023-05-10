const Student = [];
var repeat = true;

while (repeat) {
  var studentName = prompt("Enter a student name please: ");
  Student.push(studentName);
  repeat = confirm("Do yiu want add another student?");
}

Student = Student.sort();
alert("Here are all students after sorting: " + Student.join(", "));
