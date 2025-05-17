// scope is different in node and browser
// in node, the global scope is the module scope
// in browser, the global scope is the window object



function one() {
    const username = 'John Doe';

    function two() {
        const website = 'new site';
        console.log(username); //John Doe
    }

    // console.log(website)
    two();
}

one();
// Output: ReferenceError: website is not defined
 


if(true) {
    const username = 'shashwat';    
    if(username === 'shashwat') {
        const website = 'new site2';
        console.log(username + website) //shashwatnew site2 
        //as from global scope it is possible to access whether it will be in const or let 
    }
    // console.log(website) //ReferenceError: website is not defined
}
// console.log(username) //ReferenceError: username is not defined



//  ++++++++++++ interesting ++++++++++
console.log(addOne(2));
function addOne(num) {
    return num + 1;
}
 
addTwo(2); // Output: 3   
//ReferenceError: Cannot access 'addTwo' before initialization
// (Hoisting concept)
const addTwo = function(num) {
    return num + 2;
}