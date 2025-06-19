//Array specific loops
// for of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

// const greetings = ["hello", "hi", "hey"]
// for (const greet of greetings) {
//     console.log(greet); // prints hello hi hey
// }

const greetingsNew = "Hello welcome to new loop ways";
for (const greet of greetingsNew) {
  console.log(`Each char is : ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United kingdom");
map.set("IN", "India");

// console.log(map);
// Output:
// Map(3) {
//   'IN' => 'India',
//   'US' => 'United States',
//   'UK' => 'United kingdom'
// }
// unique values are there, maintains the order of insertion

for (const key of map) {
  console.log(key);
  //    OUTPUT:  ["IN", "India"][("US", "United States")][("UK", "United kingdom")];
}

for (const [key, value] of map) {
  console.log(`key: ${key} and value /: ${value}`);
  //   key: IN and value : India
  // key: US and value : United States
  // key: UK and value : United kingdom
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  // console.log(key, ':-', value);  //TypeError: myObject is not iterable
}


// ********* we can't use for of loop on objects *******//