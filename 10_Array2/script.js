const marvelHeros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "saktiman", "spico"]

// marvelHeros.push(dc_heros);
// marvelHeros.concat(dc_heros)
const allHeros = marvelHeros.concat(dc_heros)
console.log(allHeros);

// spread out value

const all_new_heros = [...marvelHeros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3[4, 5, 6], 7, [6, 7[4, 5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("chandra"));
console.log(Array.from("chandra"));

console.log(Array.from({ name: "chandra" }));        //interview related ques...


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));