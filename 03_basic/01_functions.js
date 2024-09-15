
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
 //console.log(loginUserMessage("paresh"))

 // shopping cart. 

function calculateCartPrice (val1, val2,...num1) {
    return num1
}
//console.log(calculateCartPrice( 200 , 300 , 400));

//. passing object in function. 

const user = {
    Username: "paresh",
    price: 200
}
 function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
 
// handleObject(user)
handleObject({
     username: "sam",
     price: 200
})

      //. passing array

  const MyNewArray = [200, 400, 500, 600]
  
  function returnSecondValue(getArray) {
    return getArray[1]
  }

//   console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200, 300, 500]));