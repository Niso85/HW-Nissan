var num = +prompt("insert a number: ");
var odd = "";
var even = "";
var msg = "The number is: ";
var isEven = num % 2 === 0;

for (var i = num; i > 0; i -= 2) {
  if (i % 2 === 0) {
    even += i + "\n";
    odd += i - 1 + "\n";
  } else {
    odd += i + "\n";
    even += i - 1 + "\n";
  }
}

if (isEven) {
  msg += "even";
} else {
  msg += "odd";
}

alert(
  msg +
    "\n" +
    "The even numbers are: " +
    "\n" +
    even +
    "\n" +
    "The odd numbers are: " +
    "\n" +
    odd
);
