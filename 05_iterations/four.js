const myObject = {
   js: 'javascript',
   cpp: 'C++',
   rb: "ruby",
   swift: "swift by apple"
} 
for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);    
}

const programming = ["js", "cpp", "py", "java", "rb"]
 for (const key in programming) {
    console.log(programming[key]);
    
 }
      // forin loop not work on map