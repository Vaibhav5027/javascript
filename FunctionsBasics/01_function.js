//declaration
function firstFunction(parameters) {
    return parameters;
}
//callong
firstFunction  //==> it will give reference
firstFunction() //=> it will execute the function

function addTwoNumber(num1, num2)
{
    return (num1 + num2);
}
const result=addTwoNumber(3 , 4);
console.log(addTwoNumber()); //if you pass empty arguments then it will treate as the undefined and give you NAN

//we can pass the object array like same
const user = {
    name: "vaibhav",
    age:26
}
function loguser(object) {
    return ` hi ${object.name} your age is ${object.age}`
}

console.log(loguser(user));

/*here we call it as rest operator if you dont know exactly how much input parameters comming then you can use 
 spread opeartor  it will give you array as result*/
function addNumber(...num1) {
    return num1;
}
console.log(addNumber(1,3,6.8,9));

//simillary we can pass the array
// Notes
//we can directly pass the object and array in the argumensts like below 
loguser({
    name: "",
    address:""
})

/* scope there ara two type of scope global scobe and block scope/local scope

if you use var variable then there is issue with scope thats why we dont use scope 
for example */

// const a = 0;
// var b = 1;
// let c = 2;
// console.log(a);
// console.log(b);
// console.log(c);

{
    const a = 0;
    var b = 1;
    let c = 2; 
}
// console.log(a); we cant access the a and c outside of the block scope
console.log(b);
// console.log(c);
/*Notes
here  we cant access a and c beacuse of scope resolution but we can access the var variable this is
issue because this variable are limited to this scope but we can use this outside aslo */

// there are two way for declaring function

function sum(num1,num2){
return num1+num2;
}

//this keyword
username="patil";
function three(){
    const username="vaibhav"
    console.log(`${username} `);
    console.log(this);
}
// three();

const userDetails={
    name:"vaibhav",
    age:26,
    email:"patil@gmai.com",
    message:function (){
   console.log(`welcome ${this.name}`);
     console.log(this);  //this will give you the current context
    }
}
userDetails.message();
userDetails.age=27
userDetails.message();

 /*******************************Arrow Function**********************/
/*  syntax
  if you user curly braces then explicitly yu nedd to retuen value*/
const arrowFunc=()=>{
    console.log("arrow function");
    
}
const arrowFunc1=(num1,num2)=>{
      return num1+num2;  // if you didnt wrote the retuen keyword then it gives undefined
}
const arrowFunc2=(num1,num2)=>num1+num2;  //if you remove the curly braces then it will implicitly add the retuen 
//   statement , but issue comes when you want to return object 
arrowFunc()
const arrowFunc3=()=>{username:"vaibhav"
};   // it will give you undefined for this you nedd to add parenthesis like below
const arrowFunc4=()=>({username:"vaibhav"
})
console.log(arrowFunc1(3,4)); 
console.log(arrowFunc2(4,4)); 
console.log(arrowFunc3()); 
console.log(arrowFunc4()); 


