
function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

// function addTwoNumbers(number1 , number2){  // parameter. (function defination)

//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1 , number2){  // parameter. (function defination)

    // let result = number1 + number2
    // return result

    return number1 + number2
}

//addTwoNumbers(3, null) // argument. (function calling)

const result = addTwoNumbers(3 ,5)
// console.log("Result: ", result);

 function loginUserMessage(Username = "sam"){
    // if(Username === undefined){
    //   console.log("please enter a username");
    //   return
    // }
    if(!Username){
        console.log("please enter a username");
        return
      }
    return`${Username} just logged in`
 }

 //console.log(loginUserMessage("paresh"))
 console.log(loginUserMessage("paresh"))
 