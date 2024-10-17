const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const burger = {
    name: 'veggie burger',
    price: 250,
    isAvailable: true,

    orderBurger: function(){
        console.log("wrost burger");
    }
}

console.log(Object.getOwnPropertyDescriptor(burger, "name"));

Object.defineProperty(burger, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(burger, "name"));

for (let [key, value] of Object.entries(burger)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}