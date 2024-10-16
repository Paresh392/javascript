function SetUsername(username){
    //complex DB calls
    
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const student = new createUser("student", "student@fb.com", "777")
console.log(student);