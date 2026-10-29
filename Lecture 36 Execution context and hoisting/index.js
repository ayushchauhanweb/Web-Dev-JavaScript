
console.log(a);// Undefined (Hoisting)
var a = 5;

console.log(a); // Error (due to temporal dead zone)
let a = 5;


// fun1() // Function declartion

// function fun1(){
//     console.log("hii");
// }

// fun2()

// var fun2 = function(){
//     console.log("hello");
// }

// fun3()

// const fun3 = function(){
//     console.log("hello dosto");
// }

var a = 5;
let b = 10;
console.log(a + b);

function outter() {
    let num1 = 10;
    let num2 = 20;
    var a = "hii";

    function inner() {
        let num1 = 50;
        let num2 = 60;
        return num1 + num2
    }

    const result = inner() + num1 + num2;

    return result;
}

const result = outter()

console.log(result);


// // function recurse(){
// //     recurse()
// // }

// recurse()
