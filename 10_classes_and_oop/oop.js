const user = {
    username : "Paresh",
    logincount : 3,
    signedIn: true,
 
    getUserDetail: function () {
       //console.log("Got user detail from database");
       // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
 
 //console.log(user.username);
 //console.log(user.getUserDetail);
 //console.log(this);
 
 function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
   // return this
 }

 const userOne = new User("Paresh", 13, true)
 const usertwo = new User("student", 401, false)
 console.log(userOne.constructor);
 //console.log(usertwo);