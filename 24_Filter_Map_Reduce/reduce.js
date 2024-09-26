const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function(accumlator,currentvalue){

//     console.log(`accum ${accumlator} curval ${currentvalue}`);

//     return accumlator+currentvalue
// },0)

const myTotal = myNums.reduce((accum, cur) => accum + cur, 0);
console.log(myTotal);

const shopingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "datascience course", price: 12999 },
  { itemName: "Python", price: 699 },
  { itemName: "react", price: 99 },
  { itemName: "node", price: 29 },
  { itemName: "Express", price: 1000 },
];

const priceToPay=shopingCart.reduce((accum, item) => accum + item.price, 0);
console.log(priceToPay);
