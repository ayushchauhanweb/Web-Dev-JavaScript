// console.log(a);

// var a=6;
// let a =56;
// const a = 25;


// addNum()

// function addNum(){
//     console.log("Hello");
// }


// console.log(addTwoNum);

// var addTwoNum  = function(){
//     console.log("Function expression");
// }


// var a = 5;

// function addNum() {
//     let a = 6
//     console.log(a);
// }
// addNum()


// let x=6;

// function random(){
//     console.log(x);
//     let x= 3;
// }
// random()


let city = "Delhi";

// function printcity() {
//     console.log(city);
// }

// function random(fun) {
//     let city = "Varansi"
//     function printcity() {
//         console.log(city);
//     }
//     return printcity
// }
// let printcity=random()
// printcity()


function outer() {

    let username = "Ayush"
    function inner() {
        console.log(username);
    }
    return inner 

}

const inner = outer()
let username = "Ayush chauhan"
inner()