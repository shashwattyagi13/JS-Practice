// 'use strict';  // treat all code as strict JS

// alert('Hello World!'); // we are using nodejs, not browser

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof true); // boolean
console.log(typeof 123); // number
console.log(typeof BigInt(123)); // bigint
console.log(typeof "Hello World!"); // string
console.log(typeof Symbol("id")); // symbol
console.log(typeof { name: "John Doe" }); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof function() {}); // function  
console.log(typeof new Date()); // object
console.log(typeof new RegExp("ab+c")); // object
console.log(typeof new Map()); // object
console.log(typeof new Set()); // object
console.log(typeof new WeakMap()); // object
console.log(typeof new WeakSet()); // object
console.log(typeof new ArrayBuffer(8)); // object
console.log(typeof new DataView(new ArrayBuffer(8))); // object
console.log(typeof new Int8Array(8)); // object


