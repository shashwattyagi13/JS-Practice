const user = {
  name: "shashwat",
  price: 9982,

  welcomeMessage: function () {
    // console.log(`${this.name}, welcome to the site!`);
    // console.log(this); // Output: { name: 'shashwat', price: 9982, welcomeMessage: [Function: welcomeMessage] }
  },
};

user.welcomeMessage(); //shashwat, welcome to the site!
user.name = "manu";
// user.welcomeMessage(); //manu, welcome to the site!

// console.log(this) // Output: {} in node
// Output: Window {...} in browser

function chai() {
  let username = "shash";
  //   console.log(this);
  //   Output:
  // <ref *1> Object [global] {
  //   global: [Circular *1],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   structuredClone: [Function: structuredClone],
  //   atob: [Getter/Setter],
  //   btoa: [Getter/Setter],
  //   performance: [Getter/Setter],
  //   fetch: [Function: fetch],
  //   crypto: [Getter]
  // }

  //   console.log(this.username); //undefined 
  //   (this is only working in objects not in functions)
}
chai();



const chai2 = () => {
    let user = 'captain';
    // console.log(this) // Output: {} in node
}
chai2();



const addThree = (num1,num2, num3) => {
    // console.log(num3); // Output: undefined
    // console.log(num1 + num2 + num3); // Output: NaN
    return num1 + num2 + num3;
}

//IMPLICIT RETURN
const addThreeNew = (num1,num2, num3) => num1 + num2 + num3;
// console.log(addThreeNew(2,3,4)) //Output: 9

// const addTwo = (num1, num2) => { name: 'anything'}
// console.log(addTwo(2,3)) //Output: undefined  as we can't return an object like this

const addTwo = (num1, num2) => ({ name: 'anything'})
console.log(addTwo(2,3)) //Output: { name: 'anything' } 
