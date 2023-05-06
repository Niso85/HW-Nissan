var salary = prompt("insert your salary please: ");
salary = parseInt(salary);

var percent1 = 0.1;
var percent2 = 0.2;
var percent3 = 0.3;
var percent4 = 0.4;
var percent5 = 0.5;

var sal1 = 25000;
var sal2 = 50000;
var sal3 = 100000;
var sal4 = 150000;

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;

var tax = 0;

if (salary) {
  if (salary > 0) {
    if (salary <= sal1) {
      tax = salary * percent1;
      alert("The tax you should pay is: " + tax + " NIS");
    } else {
      if (salary <= sal2) {
        num1 = salary - sal1;
        num2 = salary - num1;
        tax = num1 * percent2 + num2 * percent1;
        alert("The tax you should pay is: " + tax + " NIS");
      } else {
        if (salary <= sal3) {
          num1 = salary - sal2;
          num2 = salary - num1 - sal1;
          num3 = salary - (num1 + num2);
          tax = num1 * percent3 + num2 * percent2 + num3 * percent1;
          alert("The tax you should pay is: " + tax + " NIS");
        } else {
          if (salary <= sal4) {
            num1 = salary - sal3;
            num2 = salary - num1 - sal2;
            num3 = salary - (num1 + num2) - sal1;
            num4 = salary - (num1 + num2 + num3);
            tax =
              num1 * percent4 +
              num2 * percent3 +
              num3 * percent2 +
              num4 * percent1;
              alert("The tax you should pay is: " + tax + " NIS");
          } else {
            num1 = salary - sal4;
            num2 = salary - num1 - sal3;
            num3 = salary - (num1 + num2) - sal2;
            num4 = salary - (num1 + num2 + num3) - sal1;
            num5 = salary - (num1 + num2 + num3 + num4);
            tax =
              num1 * percent5 +
              num2 * percent4 +
              num3 * percent3 +
              num4 * percent2 +
              num5 * percent1;
              alert("The tax you should pay is: " + tax + " NIS");
          }
        }
      }
    }
  } else {
    alert("Salary should be greater than 0 !!!");
  }
} else {
  alert("Salary should be numeric only! please enter a number...");
}
