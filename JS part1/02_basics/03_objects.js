// singleton
// Object.create

const mySym = Symbol('key1')

// object literals 
const person = {
    name: 'John',
    [mySym]: 'value1',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// console.log(person.name) // John
// console.log(person['name']) // John
// console.log(person.age) // 30   
// console.log(person['age']) // 30
// console.log(person.greet()) // Hello, my name is John

// console.log(person[mySym]) // value1

person.name='shashwat';
// Object.freeze(person); // makes the object immutable
person.name='shashwat1'; // doesn't change the name
// console.log(person.name) // shashwat

// console.log(person.greet)
person.greet2 = function() {
    console.log(`Hello, my name is ${this.age}`);
}  

// console.log(person.greet2)  // [Function (anonymous)]   //function returns value, function refers comes here, it is not executed
// console.log(person.greet2()) // undefined (may be because of reference) 

