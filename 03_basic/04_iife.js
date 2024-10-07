//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`Dot Connected `);
    
})();

( (name) =>{
    console.log(`Dot Connected two ${name}`);
    
}) ("paresh");