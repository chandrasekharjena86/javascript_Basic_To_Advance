function calculateCart(value1, value2, ...num1) {
  //spared/rest  operator use ...  all the item convert in one array
  return num1;
}
// console.log(calculateCart(200,300,400));

const user = {
  username: "chandra",
  price: 122,
};
function objectUser(userprice) {
  console.log(
    `username is ${userprice.username} and price is ${userprice.price}`
  );
}
// objectUser(user)
objectUser({
  username: "sam",
  price: 499,
});

const newArray = [100, 200, 300, 400, 500];
function updateSecondarray(checkArray) {
  return checkArray[3];
}
console.log(updateSecondarray(newArray));
