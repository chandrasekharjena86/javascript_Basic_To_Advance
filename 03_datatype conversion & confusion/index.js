let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber );
console.log(valueInNumber);

//"33" => 33
//"33abc" =>NaN - Not a Number
//"true" =>1;false => 0

let isLoggedIn = "chandra"

let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

//1 => true ; 0 =>false
//"" =>false
// "chandra" => true

let someNumber = 33

let stringNumber = string(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)