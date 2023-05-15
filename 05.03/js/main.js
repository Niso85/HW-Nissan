let str = prompt("Enter a some word: ");
const [consonants, vowels] = checkString(str);
printer([consonants, vowels]);

function checkString(str = "") {
  str = str.toLowerCase().replaceAll(" ", "");
  const stops = ["a", "e", "i", "o", "u"];
  const vowels = [];// ניקוד
  const consonants = [];// הברה

  for (let i = 0; i < str.length; i++) {
    if (stops.includes(str[i]) && !vowels.includes(str[i])) {
      vowels.push(str[i]);
    } else if (!stops.includes(str[i]) && !consonants.includes(str[i])) {
      consonants.push(str[i]);
    }
  }
  return [consonants.sort().join(", "), vowels.sort().join(", ")];
}

function printer(arr) {
  alert(`Your consonants are: ${arr[0]} 
And Your vowels are: ${arr[1]}`);
}
