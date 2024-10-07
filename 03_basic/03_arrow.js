//This keyword.
//    *- it refer currrent context

const user = {
    username: "paresh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
//  user.welcomeMessage()
//  user.username = "rupesh"
//  user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username = "paresh"
//     console.log(this);
    
// }
// chai()
// const chai = function () {
//         let username = "paresh"
//         console.log(this.username);
// }
//chai()

// 
    // const chai = function () {
//         let username = "paresh"
//         console.log(this.username);
// }
// chai()

// const addTwo =(num1, num2) => {
//     return num1 + num2 
// } 

//  const addTwo =(num1, num2) => num1 + num2 
   
//const addTwo =(num1, num2) => (num1 + num2 )

const addTwo =(num1, num2) => ({username: "paresh"})
console.log(addTwo(5,6))