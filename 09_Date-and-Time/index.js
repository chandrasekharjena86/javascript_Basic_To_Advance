// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);               //type of the date object

// let myCreatDate = new Date(2023,0,23)
// let myCreatDate = new Date(2023,0,23,5,3)
let myCreatDate = new Date("01-17-2023")
// console.log(myCreatDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());

// GET MILLI SECOND

//console.log(Date.now()/1000);                  /* remove dot value using Math.flore()  or math.round()   */
//console.log(Math.floor(Date.now()/1000));

// HOW TO CHANGE DAY,TIME,YEAR

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay() + 1);
// console.log(newDate.getMonth());


 console.log(newDate.toLocaleString('default'), {
    weekday:"long"
})