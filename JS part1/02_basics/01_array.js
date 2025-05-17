// array

const myArray = [1, 2, 3, 4, 5];
const myHeros = ['shaktiman', 'captain america', 'batman', 'superman'];
const myArray2 = new Array(1, 2, 3, 4, 5);
const myArray3 = new Array(5); // empty array of length 5

console.log(myArray[1]); // 2

//Array Methods
myArray.push(6); // add 6 to the end of the array
console.log(myArray); // [1, 2, 3, 4, 5, 6]

myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5]

myArray.unshift(9); // add 9 to the beginning of the array
console.log(myArray) // [9, 1, 2, 3, 4, 5]  this is expensive not recommended
                    // as it is not optimized, bcz here are only 5 elements
                    // but in case of 1000 elements, it will take time
myArray.shift(); // remove the first element of the array
console.log(myArray) // [1, 2, 3, 4, 5] // remove the first element of the array

console.log(myArray.includes(2)); // true
console.log(myArray.indexOf(33));  -1 // absent in myArray



const newArr = myArray.join();
console.log(newArr);
console.log(typeof newArr); // converts to string

console.log(myArray)
const slicedArray = myArray.slice(1, 3); // slice from index 1 to index 3 (not included)
console.log(slicedArray); // [2, 3]
  
const newArr2 = myArray.splice(1, 3);
console.log(newArr2); // [2, 3, 4] // removes 3 elements from index 1
console.log(myArray); // [1, 5] // original array is modified