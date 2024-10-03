// Array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);
// console.log(myArr [3]);

// Arry method
const myArr2 = [0, 1, 2, 3, 4, 5];
// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()
// myArr2.unshift(8)
// myArr2.shift()
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice and splice

// console.log("A ",myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3);
console.log("c ", myArr);
console.log(myn2);

// Check methods

// // toString()

const fruits = ["banana", "lichi", "graps", "mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//at()

const books = ["math", "phy", "bio", "chem"];
let book = books.at(2);
document.getElementById("demo").innerHTML = book;

//join()

const clas = ["math", "phy", "bio", "chem"];
document.getElementById("demo").innerHTML = clas.join("#");

// pop()

const web = ["html", "css", "js", "react"];
document.getElementById("demo").innerHTML=web.pop()
document.getElementById("demo").innerHTML=web

