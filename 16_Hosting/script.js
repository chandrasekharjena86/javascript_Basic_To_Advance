// Nested scope

function one() {
  const username = "chandra";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);   //1st error

  //   two();                     // function two inside of log user name they should be exicuted
}
one();

if (true) {
  const username = "chandra";

  if (username === "chandra") {
    const website = " youtube";
    // console.log(username+website);
  }
  // console.log(website);
}

// console.log(username);

// +++++++++++++++++ inetrsting question +++++++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};

