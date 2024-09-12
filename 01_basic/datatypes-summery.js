// 1 . Primitive 

// 7 types : String , Numbers , Boolean , Null , Undefine , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)
const bigint = 1234567849n

// 2. Reference (NON Primitive)
// Array , Object , Function

const heroe = ["Iron Man", "Thor", "Captain America"]//array
let myObj={
    name: "Paresh",
    age: 18,
}//object

const myFunction = function(){
    //console.log("Hello world")
}//function

//console.log(typeof myFunction);


//******************** Memory Allocation ********************

// 1. Stack (use in primitive)
// 2. Heap (use on non primitive)

let myYoutubename = "pareshdotcom"

 let anotherName = myYoutubename
 anothername = "kumar"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
 
let userTwo = userOne

userTwo.email = "paresh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//stack gives coppy value.
//heap gipes reference value.
