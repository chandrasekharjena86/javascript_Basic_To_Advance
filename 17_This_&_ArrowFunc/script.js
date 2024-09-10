const user = {
  username: "chandra",
  price: 199,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`); // all user object axis use this key word
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username="sekhar"
// user.welcomeMessage()       //context value will change

// console.log(this);

// function chai(){
//     let username="chndra"
//     console.log(this.username);

// }
// chai()

// const chai = function() {
//     let username = "chndra";
//     console.log(this.username);
//   };
//   chai();

const chai = () => {
  let username = "chndra";
  console.log(this);
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2);     //implicity return = oneline statement without use reyturn key word

const addTwo = (num1, num2) => ({ username: "sekhar" });   //return object 

console.log(addTwo(3, 4));



const myArray=[2,4,56,77,6]

// myArray.forEach()