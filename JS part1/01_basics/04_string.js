const gameName = new String("shashwat");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf("a"));

//go through all the string methods from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const newString = gameName.substring(-6, 3);
console.log(newString); //sha  //as it always starts from 0 by default

const anotherString = gameName.slice(0, 3);
const anotherString2 = gameName.slice(-6, 4);
console.log(anotherString2); //as

let test = "test-here-now";
console.log(test.split("-")); //['test', 'here', 'now']
//Split - It will split the string into an array of strings
console.log(test.split("")); //['t', 'e', 's', 't', '-', 'h', 'e', 'r', 'e', '-', 'n', 'o', 'w']
//It will split the string into an array of characters

