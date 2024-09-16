// check Truth Value

const usermail = [];

if (usermail) {
  console.log("got user mail");
} else {
  console.log("dont have user email");
}

//falsy values --->>

// false, 0 ,-0 , BigInt  0 n , "" , null , undefined ,NaN

// Truthy values -->>>

// "0" , "false" , " " , [] , {} , function(){} ,

// if (usermail.length === 0) {
//     console.log("array is empty");

// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  // how to check empty object
  console.log("object is empty");
}

// Nullish coalescing operator (??) : null  undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1=null ?? 10 ?? 25


console.log(val1);


// Ternary operator 

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice >=80 ? console.log("less then 80") : console.log("more then 80");
;
