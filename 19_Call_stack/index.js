//   java script exicution context

// {}  -> global exiction

// (1)global exicution context
// (2) Function exicuttion context
// (3) Eval exicution context

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let result = num1 + num2;
  return result;
}
let result1 = addNum(num1 + num2);
let result2 = addNum(10, 2);



// call stack 

function one() {
    console.log("one")
}
function Two() {
    console.log("Two")
}
function Three() {
    console.log("Three")    
}
one()
Two()
Three()