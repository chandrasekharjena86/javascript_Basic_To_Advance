
//Global scope
var c = 200;
let a = 400;


// Block scope 
if (true) {
  let a = 20;
  const b = 30;
  console.log("inner:", a);
}
console.log(a);
// console.log(b);
console.log(c);
