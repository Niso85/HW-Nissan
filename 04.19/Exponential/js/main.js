var base = +prompt("insert a number for base: ");
var expo = +prompt("insert a number for exponential: ");
var result = base;

while(expo > 1){
    result *= base
    expo --
}

alert(result)
