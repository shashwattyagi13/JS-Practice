// ++++++++++++++++++++++++++++

//Stack-(we get copy)(primitive) vs Heap (we get reference)(Non-Primitive) memory

let myYoutubeName = "Shashwat";

let anotherName = myYoutubeName;
anotherName = "Shashwat Singh";

console.log(myYoutubeName); // Shashwat
console.log(anotherName); // Shashwat Singh


let userOne = {
    email : 'shashwat@google.com',
    upid : 'shashwat@upi',
}

let userTwo = userOne;
userTwo.email = 'shashwat@google.in';

console.log(userOne.email, userTwo.email); //shashwat@google.in shashwat@google.in
