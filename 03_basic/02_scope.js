//var c =200
let a = 200
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER:",a);
    
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "paresh"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    //two()
}
//one()

if (true) {
    const username = "paresh"
    if (username === "paresh") {
        const website = " youtube"
        //console.log(username +  website);
        }
        //console.log(website);
        
    }
    //console.log(username);

    //*****************. interesting *************
  
 console.log(addone(5))
   function addone(num){
    return num + 1
 } 
 //addtwo(5)
 const addtwo = function(num){    //  Hoisting
      return num + 2
 }
 addtwo(5)