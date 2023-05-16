let str = prompt("Enter a string: ");
let printer = stringCounter(str);
alert(printer.join("\n"))

function stringCounter(str = "") {
  str = str.toUpperCase().replaceAll(" ","");
  const Letters = [];
  let counter;

  while (str.length > 0) {
    counter = 0;
    for (let i = 0; i < str.length; i++) {
      if(str[0] == str[i]){
        counter ++;
      }
    }
    Letters.push(`{letter: ${str[0]}, amount:  ${counter}}`)
    str = str.replaceAll(str[0], "");
  }
  return Letters;
}