var palindrome = prompt("insert a number: ");
var value = palindrome;
var reverse = "";
var message = "";

var i = value.length - 1;
while (i >= 0) {
  reverse += value[i];
  i--
}

if (palindrome == reverse) {
  message += "The value " + palindrome + " is palindrome";
  alert(message);
} else {
  message += "The value " + palindrome + " is not palindrome";
  alert(message);
}
