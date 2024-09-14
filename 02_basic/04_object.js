//const tinderUser = new Object() // singlton 
const tinderUser = {} // non singlton

tinderUser.id = "123user"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser  = {
    email:"sam@google.com",
    fullname: {
        userfullname: {
        firstname: "paresh",
        lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//combination of object. 

