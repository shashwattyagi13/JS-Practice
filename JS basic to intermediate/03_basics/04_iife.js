// IIFE - Immediately Invoked Function Expression

// use cases :
//immediate execution with db connection
//don't want to pollute the global scope

(function chai() {
  //named function expression
  console.log("db connected");
})();
// Output: db connected

((name) => {
  console.log(`db connected ${name}`);
})("shashwat");
// Output: db connected shashwat
