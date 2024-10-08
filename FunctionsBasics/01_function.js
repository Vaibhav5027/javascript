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
Notes
//we can directly pass the object and array in the argumensts like below 
loguser({
    name: "",
    addres:""
})



