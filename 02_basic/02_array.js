const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "flash", "Batman"]

//marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[2],[2]);

 const all_heros = marvel_heros.concat(dc_heroes)
 //console.log(all_heros);

//const all_new_heros = [...marvel_heros , ...dc_heroes].//Sprade operator
//console.log(all_new_heros);

const another_array  = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Paresh"));
console.log(Array.from("Paresh"));
console.log(Array.from({name :"Paresh"})); //. interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
