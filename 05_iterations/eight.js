const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc * currval
// },2)

const myTotal = myNums.reduce ((acc, curr) => acc*curr ,2)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "python course",
        price : 1999
    },
    {
        itemName: "mobileweb course",
        price : 999
    },
    {
        itemName: "javascript course",
        price : 599
    },
    {
        itemName: "devops course",
        price : 1299
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
