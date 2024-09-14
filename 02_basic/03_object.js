// created by two ways

// singlton
// object.create (constructor)

//object literals

const  mySym = Symbol("key1")


const jsUser = {
    name: "Paresh",
    "full name": "Paresh kumar",
    [mySym]: "key1",
    age: 18,
    location: "jaipur",
    email: "paresh@google.com",
    isLoggedIn: false,
    lastLoginays: ["Monday","Saturday"]     
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "paresh@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "paresh@icloud.com"
//console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Js user")
    
}
jsUser.greetingtwo = function () {
    console.log(`Hello Js user,${this.name}`);//to reference same object. 
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
