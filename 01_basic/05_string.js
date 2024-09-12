//concatenaton of string

const name = "Paresh"
const repoCount = 50

//conosole.log(name + repoCount + " value"); //not better ways to concatenate and not reliable.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // best ways and reliable.

const gameName = new String('paresh-kr-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne= "   paresh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "htttp://paresh.com/paresh%20kumar"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


