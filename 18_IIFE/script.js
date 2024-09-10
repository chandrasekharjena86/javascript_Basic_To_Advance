// Immediately  invoked function expressions (iife)

(function chai() {
  //named iife

  console.log("DB CONNECTED");
})();

// ()  - function defination
// ()  - exicution

((name) => {
  //unnamed iife
  console.log(`DB CONNECTED TWO ${name}`);
})("chandra");
