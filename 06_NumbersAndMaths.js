let number = new Number(100.256);

console.log(number.toFixed(2));
console.log(number);


// ***********************************Math***************************************//
// some method of Math class used on number

//it will give floor value
console.log(Math.floor(number));

//it will give ceil value
console.log(Math.ceil(number));

//it will give positve value not vice-versa,, used to covert negative value to positve
console.log(Math.abs(-8));


/**************************Random ***************/


console.log(Math.random());  //it will genereat the value between 0-1

console.log(Math.random()*10) // used to genereate vallue above 1

// if you have any specific condition then 
let min = 10;
let max = 20;
console.log(Math.floor(((Math.random()*10)+(max-min+1))+min));
