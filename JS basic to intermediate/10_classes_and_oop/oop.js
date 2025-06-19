const user = {
  username: "shashwat",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Got user details from database `);
    console.log(`Username: ${this.username}`); // while using arrow functions undefined comes as in that
    // Arrow functions do not have their own this. They lexically inherit this from the surrounding (parent) scope.

    console.log(this);
    //     {
    //   username: 'shashwat',
    //   loginCount: 8,
    //   signedIn: true,
    //   getUserDetails: [Function: getUserDetails]
    // }
  },
};
console.log(user.username);
console.log(user.getUserDetails());

//The final undefined is printed because console.log(user.getUserDetails()) runs the function (which has no return value) — so undefined is logged.


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
    return this; //if we don't write then also fun will return values.
}

const userOne = new User('shashwat', 12, true);
const userTwo = new User('chai aur code', 12, true);

console.log(userOne)
