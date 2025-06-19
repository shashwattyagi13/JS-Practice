const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(myObject.key);
  //   output:
  //   undefined;
  //   undefined;
  //   undefined;
  //   undefined;
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
  //   console.log(myObject[key]);
  //   output:
  //   undefined;
  //   undefined;
  //   undefined;
  //   undefined;
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key]);
  //   output:
  //   js;
  //   rb;
  //   py;
  //   java;
  //   cpp;
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);   //not iterable so nothing will print
// }
