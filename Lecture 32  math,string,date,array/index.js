function convertToPositiveNumber(num) {
    return num * -1
}

let number = convertToPositiveNumber(-15);
console.log(number);

let number2 = Math.abs(-20);
console.log(number2);

console.log(Math.pow(2,3));

console.log(Math.min(2,2,6,4,8,6,42,1,1));

console.log(Math.max(945,23,4,5,98,));

console.log(Math.round(2.1));
console.log(Math.round(8.6));
console.log(Math.round(9.9));
console.log(Math.round(1.5));

console.log(Math.ceil(4.1));
console.log(Math.floor(7.9));


// let min = 1;
// let max = 6;
// let result = Math.floor(Math.random() * (max - min + 1))  + min;
// console.log(result); 


// console.log(Number.isFinite(18));
// console.log("18");
// console.log(Number,parseInt("18"));


// let num1 = 10;
// let num2 = 10;
// console.log(parseInt(num1) + parseInt(num2));

// let num = 78.238756422;
// console.log(num.toFixed(1));

// console.log(num.toPrecision(5));


console.log("ayush".toUpperCase());


let str = "Ayush";
let email = "ayush@gmail.com"

// console.log(str.includes("sh"));
console.log(email.includes("@"));


let filename = "image.jpg";
console.log(filename.endsWith(".png") || filename.endsWith(".jpg"));

let greet = "hi ayush hello ayush";
console.log(greet.replace("hi","hello"));


// Date 

console.log(Date.now()); // to get current unix time stamp

let date= new Date()
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toDateString());



