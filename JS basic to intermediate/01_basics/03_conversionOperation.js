const score = '12';

// console.log(typeof score); // string
// let valueInNumber = parseInt(score);
let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); 


console.log(typeof NaN) // number
console.log(typeof Object)  // function
console.log(typeof String) // function
console.log(typeof Number) // function
console.log(typeof parseInt) // function
console.log(typeof parseFloat) // function
console.log(typeof isNaN) // function

//'33' => 33
//'33.3' => 33.3
//'33.3.3' => NaN
//'33abc' => 33
//'abc33' => NaN
console.log(parseInt('33abc')) // 33
console.log(parseInt('abc33')) // NaN
console.log(parseInt('33.3')) // 33 
true // 1
false // 0
console.log(parseInt(true)) // 1
console.log(parseInt(false)) // 0   
console.log(parseInt(null)) // 0
console.log(parseInt(undefined)) // NaN
console.log(parseInt(NaN)) // NaN
console.log(parseInt({})) // NaN
console.log('re',parseInt([])) // NaN 
console.log('ag',parseInt([1, 2, 3])) // 1 


let isLoggedIn = {};
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)
// ''=> false
// 'shashwat' => true
// 0 => false
// 1 => true
// -1 => true
// null => false
// undefined => false
// NaN => false
// [] => true
// {} => true
// [1, 2, 3] => true
// [0] => true

console.log(typeof ('1'+2)); //string
console.log(typeof (14+'2')); //string

console.log(+true)
console.log(+false)
console.log(+'')
console.log(+'shashwat') // NaN
console.log(+'123') // 123
console.log(+'123.45') // 123.45    
console.log(+'123abc') // NaN
console.log(+'abc123') // NaN
console.log(+'123.45.67') // NaN
console.log(+'123.45abc') // NaN
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+NaN) // NaN
console.log(+[]) // 0
console.log(+{}) // NaN

const bigNum = 42224444444442211111n;
const bigNum2 = BigInt(42224444444442211111);
console.log(bigNum2)

