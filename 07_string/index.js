let name = "chandra";
let mail = "chandra@gmail.com"
console.log(name + mail + "another");  //this is  old version 

// console.log(`my self ${name} my mail id ${mail}`) //this is use latest in backend,frontEnd

const gameName = new String('Sekhar');
// console.log(gameName[0]);
// console.log(gameName.__email__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));       /* charAt fuction use in string to put number */
//console.log(gameName.indexOf("k"));      /* indexof function use in string to put latter */

const newString = gameName.substring(0.3);
console.log(newString);

const anotherName = gameName.slice(1, 3)
console.log(anotherName);

const newStringOne = "   chandra   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://chanrda.com/chandra%30sekhar"
console.log(url.replace('%30', '-'))

console.log(url.includes("jena"))
console.log(url.includes("chandra"))

let toyName = new String('Sekhar_chandra_jena');
let toy1 = "developer";
const word = 'this is a fox'
const fox = "fox"
console.log(toyName.split('_'));

console.log(toyName.at())   /* at function string  first later  */
console.log(toy1.concat(toyName, " "))  /* concat is use to change the side of string */
console.log(toy1.bold()) /* bold tag use in array */
console.log(toyName.charAt())  /* charat function string  first later  */
console.log(`the  ${fox} ${word.includes(fox)? 'is' :'is not'} fighting the dog`)  /* .includes are use to string */