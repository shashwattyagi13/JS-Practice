const marvel_heros = ['thor', 'ironman', 'hulk', 'spiderman', 'black widow'];
const dc_heros = ['superman', 'batman' ]

marvel_heros.push(dc_heros); // adds dc_heros array to marvel_heros array
console.log(marvel_heros); // ['thor', 'ironman', 'hulk', 'spiderman', 'black widow', ['superman', 'batman']]
console.log(marvel_heros.length); // 6
console.log(marvel_heros[5]); // ['superman', 'batman']
console.log(marvel_heros[5][0]); // superman
console.log(marvel_heros[5][1]); // batman
console.log(marvel_heros[5][0][0]); // s
console.log(marvel_heros[5][1][0]); // b


// const newArr = marvel_heros.concat(dc_heros); // adds dc_heros array to marvel_heros array
// console.log(newArr)// ['thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'batman']

// we prefer spread operator over concat method because we can use it for more than 2 arrays
const newArr = [...marvel_heros, ...dc_heros]; // adds dc_heros array to marvel_heros array
console.log(newArr)// ['thor', 'ironman', 'hulk', 'spiderman', 'black widow', 'superman', 'batman']


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const real_array = anotherArr.flat(2); // flattens the array to 2 level
// mention the level of flattening
// or if don't know mention infinity  flat(infinity)
// console.log(real_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]]

console.log(Array.isArray('SHASHWAT')) // false
console.log(Array.isArray([1, 2, 3])) // true
console.log(Array.from('Shashwat'));
console.log(Array.from({name: 'Shashwat', age: 22})); // []   //INTERESTING
console.log(Array.from({length: 5})); // [undefined, undefined, undefined, undefined, undefined]

let score1 = 110
let score2 = 120
let score3 = 130

console.log(Array.of(score1, score2, score3)); // [110, 120, 130]