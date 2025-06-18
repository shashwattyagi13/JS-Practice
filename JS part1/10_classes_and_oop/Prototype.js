let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.shashwat = function () {
  console.log("shashwat in present in all objects");
};

// heroPower.shashwat();  // shashwat in present in all objects
// myHeros.shashwat();    // shashwat in present in all objects

Array.prototype.heyShashwat = function () {
  console.log("shashwat says hello");
};

myHeros.heyShashwat(); //shashwat says hello
// heroPower.heyShashwat();   //TypeError: heroPower.heyShashwat is not a function
// as if we are assigning to it array then object won't get their function like as in objects cases

const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiaurCode      '
String.prototype.trueLength = function() {
    // console.log(`${this}`);   //ChaiaurCode
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() 
'shash wat'.trueLength()
'icetea'.trueLength()