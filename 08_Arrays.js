/* array
declaration*/

const array = [0, 1, 2, 3, 4, 5]
const array1 = new Array(1, 2, 3, 4, 5, 6, 7)

// Method Of Array

array.push(6) //used to insert a element in the array
console.log(array);
array.pop()  // used to remove last element
console.log(array);
array.unshift(7);
console.log(array);

console.log(array.slice(1, 3)); // it will give you the new array of elements
array.splice(1, 3);//it will remove the element form given index first inlude and last exclude
console.log(array);

/* difference between slice and splice is the slice will not manipulate the original array but
 splice operaion chenge the original array */

const marvel_heros = ["IronMan", "Hulk", "Spiderman"]
const Dc_Heros = ["Superman", "Batman", "Flash"]
 
console.log(marvel_heros.push(Dc_Heros));//it will add the  dc heros at index 4 as a single element
//it will give count after this if we print then we will get length
console.log(marvel_heros);
console.log(marvel_heros.concat(Dc_Heros)); //it will add the element of DC heros at the end of maverheros

const mixed_array = [1, 2, [3, 4, [5, 6]]] 
// if you have array which content more array as element if yoy want to convert to one degree array then you can
// use flat operator
// console.log(mixed_array.flat(2));

// spread operrator(...) user to 
console.log([1, 2,...[3, 4,...[5, 6]]]  );


const type = [1, 2, ...[3, 4, ...[5, 6]]];
console.log(typeof array);

console.log(Array.from("vaibhav")); //it will take only one argument as input and return arrray of that 

console.log(Array.of(100, 200, "vaibhav"));



