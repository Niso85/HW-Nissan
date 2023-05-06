var salary = parseInt(prompt("Insert your salary: "))
var rent = parseInt(prompt("Insert your rent: "))

var month = 1;
var amount = 0;
var isGift = false;
var rentDue = 0;
var balance = salary * 2;

if (balance >= rent) {
  balance -= rent;
} else {
  rentDue = rent;
}

month++;
balance += salary / 2;

if (balance >= rentDue) {
  balance -= rentDue;
  rentDue = 0;
}

rent += 200;
if (balance >= rent) {
  balance -= rent;
} else {
  rentDue += rent;
}

month++;
balance -= 500;

amount = balance; 
balance = 0;

if (amount < 0) {
  isGift = true;
  amount = -amount;
}

alert(month + "\n" + amount + "\n" + isGift + "\n" + rentDue);

var message = "";
message = "The current month is: " + month + ".\n";
if(rentDue > 0) {
  message += "I owe " + rentDue + " shekels to my landlord.\n";
}

if(isGift) {
  message += "I got a gift of " + amount + " shekels.";
} else {
  message += "I was robbed in the amount " + amount + " shekels.";
}

alert(message);