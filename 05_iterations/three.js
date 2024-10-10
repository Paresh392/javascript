// for of

// ["", "", ""]
// [ {}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//    // console.log(num);
// }

// const greeting = "Hello world"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`)
    
// }

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United Status of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, `:-` , value );
    
}

const myObject = {
    'game 1' : 'NFC', 
    'game 2' : 'spiderman' 
}
// for (const [key, value] of map) {
//     console.log(key, `:-` , value );
                                          
// }.  //  not work