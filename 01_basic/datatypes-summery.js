// 1 . Primitive 

// 7 types : String , Numbers , Boolean , Null , Undefine , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
const bigint = 1234567849n

// 2. Reference (NON Primitive)
// Array , Object , Function

const heroe = ["Iron Man", "Thor", "Captain America"]//array
let myObj={
    name: "Paresh",
    age: 18,
}//object

const myFunction = function(){
    console.log("Hello world")
}//function

console.log(typeof myFunction);

