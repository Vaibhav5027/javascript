/*************   Immediately Invoked Function Execution  ***********/
//some times we get errors/polution due to some global variable so avoid this and if you
// want to execute fnction imediately after declaration then we can use iife
//syntax
(function chai(){
console.log("DB Connected");
})();  // if you want to execute 2 iife function back to bac you need to add ;(semicolon) after first  

(()=>{
    console.log("DB Connected 2"); 
})();

((name)=>{
    console.log(`DB Connected by ${name}`); 
})("vaibhav")  // we can pass variable like this
