//singleton ==>Object.create()

const mySym1 =Symbol("key1");
const JsUser = {
    name: "vaibhav",
    "fullname":"Vaibhav Patil",
    email: "vaibhav@google.com",
    phoneNo: 8565942536,
    mySym: "myKey",
    isLoggedIn: false,
    [mySym1]: "newKey",
    lstLoginDays:['monday','saturday']
}

// we can access obect value using two methods
/*Note 
  in above case if you want to access fullname you cant use .(dot) operator 
  simmillary if you want assign symbole you can do like normal assignemtn you need
  to give this is [] bracket
*/

JsUser.greeting = function () {
    console.log(`hello ${this.email}`);
    
}

JsUser.email;
JsUser["name"];
console.log(JsUser.greeting());

const obj1 = {
    1: "a",
    2:"b"
}
const obj2 = {
    3: "a",
    4:"b"
}
console.log(obj1);

const obj4={obj1,obj2}// this will give you obj4 which has obj1 and obj2 as object 
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2);
//here {} it will act as source and other remailning values are target so other values are coppied into the
// source 
Object.keys(obj1) //it will return keys of obj1 as array
Object.values(obj1) //it will return values of obj1 as array
Object.entries(obj1);

console.log(Object.entries(obj1));  //result [ [ '1', 'a' ], [ '2', 'b' ] ]
console.log(obj1.hasOwnProperty(1));  //if object contains key then return true ya false

