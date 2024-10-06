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