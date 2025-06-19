
const paytmUser = new Object();  //singleton
const paytmUser2 = {};

console.log(paytmUser2); //{}

paytmUser2.name = 'John';   
paytmUser2.age = 30;

console.log(paytmUser2);  // { name: 'John', age: 30 }

const myObj = {
    age: 21,
    fullName: {
        userFullName: {
            firstName: 'Shashwat',
            lastName: 'Tyagi'
        }
    }
}
console.log(myObj['fullName']['userFullName']['firstName']); // Shashwat

const obj1 = {
    1: 'a',
    2: 'b',
}
const obj2 = {
    3: 'c',
    4: 'd',
}
const obj3 = { obj1, obj2 }
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }
// const obj4 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);  //shallow copy //means if we change the values of referencce then the source will get affected here
//obj1, obj2 and vice versa
// console.log(obj4);   //{ '1': 'c', '2': 'd' }   // overrides the value of obj1 with obj2 if both are having same keys
// console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// console.log(Object.keys(myObj)) // [ 'age', 'fullName' ]
// console.log(Object.values(myObj)) // [ 21, { userFullName: { firstName: 'Shashwat', lastName: 'Tyagi' } } ]
// console.log(Object.entries(myObj)) // [ [ 'age', 21 ], [ 'fullName', { userFullName: [Object] } ] ]
// console.log(Object.hasOwnProperty(myObj, 'age')) //false   (*********Don't know why********)
// console.log(myObj.hasOwnProperty('age'))   //true
// console.log(myObj.hasOwnProperty('umar'))   //false


const { age: myage, fullName } = myObj; //destructuring
// console.log(myage); // 21
// console.log(fullName); // { userFullName: { firstName: 'Shashwat', lastName: 'Tyagi' } }

// const { userFullName } = myObj.fullName;
// console.log(userFullName); // { firstName: 'Shashwat', lastName: 'Tyagi' }


// const { userFullName: { firstName, lastName } } = myObj.fullName; //destructuring
// console.log(firstName); // Shashwat


