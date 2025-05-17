// if
const isUserloggedIn = true
let temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }





const time = "morning";          // "morning", "afternoon", "evening"
const isRaining = true;         // true or false
temperature = 12;         // in °C
const isWeekend = false;        // true for Saturday/Sunday

if (time === "morning") {
    if (isWeekend) {
        if (isRaining) {
            if (temperature < 20) {
                console.log("Cold and rainy morning on the weekend. Stay in and enjoy a hot drink.");
            } else {
                console.log("Rainy weekend morning. Maybe read a book indoors.");
            }
        } else {
            if (temperature > 25) {
                console.log("Warm weekend morning. Great time for a morning hike!");
            } else {
                console.log("Pleasant weekend morning. Go for a relaxing walk.");
            }
        }
    } else { // Weekday morning
        if (isRaining) {
            console.log("Take an umbrella on your way to work.");
        } else {
            if (temperature < 15) {
                console.log("Cold weekday morning. Dress warmly for office.");
            } else {
                console.log("Nice morning. Have a productive workday!");
            }
        }
    }
} else if (time === "afternoon") {
    if (isWeekend) {
        if (isRaining) {
            console.log("Rainy weekend afternoon. Catch up on a movie or nap.");
        } else {
            console.log("Perfect weekend afternoon for lunch out or shopping.");
        }
    } else {
        if (isRaining) {
            console.log("Avoid stepping out after lunch. Roads may be slippery.");
        } else {
            console.log("Stay focused at work this sunny afternoon.");
        }
    }
} else if (time === "evening") {
    if (isRaining) {
        console.log("Rainy evening. Good time to stay in and relax.");
    } else {
        if (temperature < 18) {
            console.log("Cool evening. Wear a jacket if going out.");
        } else {
            if (isWeekend) {
                console.log("Lovely evening! Maybe dine out with friends.");
            } else {
                console.log("Relax after work. Maybe plan for tomorrow.");
            }
        }
    }
} else {
    console.log("Time of day not recognized.");
}
