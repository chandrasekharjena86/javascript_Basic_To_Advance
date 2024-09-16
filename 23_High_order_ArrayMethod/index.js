// for of

// ["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  console.log(num);
}

const greeting = "hello world !";
for (const greet of greeting) {
  //   console.log(`Each charector ${greet}`);
}

// MAPS

const map = new Map();
map.set("IN", "india");
map.set("USA", "United State Of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}


const myObject={
    game1:'NFS',
    game2:'spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);
    
// }