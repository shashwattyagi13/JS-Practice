// let myDate = new Date();
// console.log(myDate); //2025-05-15T01:29:59.500Z
// console.log(myDate.toString()); //Thu May 15 2025 03:29:59 GMT+0200 (Central European Summer Time)
// console.log(myDate.toUTCString()); //2025-05-15T01:31:29.245Z

// console.log(myDate.toLocaleString()); //15/5/2025, 7:02:33 am
// console.log(myDate.toDateString()); //Thu May 15 2025

let myCreatedDate = new Date(2025, 0, 23); //Thu Jan 23 2025
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);  //Thu Jan 23 2025  //month starts from 0 as it is array
// let myCreatedDate = new Date('2025-01-11'); //Sat Jan 11 2025
// let myCreatedDate = new Date('01-11-2025');  //11/1/2025, 12:00:00 am
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now(); // 1747273655591
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // 1737570600000

// console.log(Math.floor(Date.now()/1000)); //1747273933  (converts to seconds)
// console.log(myCreatedDate.getDay()); //4 as it starts from mon
// console.log(myCreatedDate.getDate()); //23
// console.log(myCreatedDate.getFullYear()); //2025
// console.log(myCreatedDate.getMonth() ); //0 as it starts from 0


// myCreatedDate.toLocaleString('default', {
//     weekday: 'long',
//     year: 'numeric',
// })                                  //Customized date format in localeString

// console.log(myCreatedDate.toLocaleDateString())  //23/1/2025

