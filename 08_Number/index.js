const number = 400;
//console.log(number);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length)     /* number convert string use tostring()  and check the length */
//console.log(balance.toFixed(5))

const otherNumber = 123.8939;

//console.log(otherNumber.toPrecision(4));

/* How to check large number in "," this formation */

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'));   //en-IN in india standard


// ++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(5));                               //absoolute convert -ve value in +ve  don't changge +ve in -ve
// console.log(Math.round(4.6));                           // nearst value in round
// console.log(Math.ceil(4.2));                            // top value 
// console.log(Math.floor(4.9));                           //bottom value
// console.log(Math.min(4,5,9,2,));                        //check min value
// console.log(Math.max(21,24,65,76,));                    //check max value


// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
