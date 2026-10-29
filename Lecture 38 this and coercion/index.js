"use strict"

// let developer = "Ayush";
// console.log(developer);

let student = {
    name: "Ayush",
    printName: function () {
        console.log("Hii,", this.name);
    }
}

student.printName();

// let result = student.printName;
// result()

let student2 = {
    name: "Ayush chauhan",
    printName: student.printName
}

student2.printName()


let nestedFunction = {
    name: "something",
    fun: function () {
        let name = "something";
        let product = {
            name: "Iphone",
            printName: function () {
                const print = () => {
                    console.log(this.name);
                }
                print()
            }
        }

        product.printName()
    }
}
nestedFunction.fun()


// let nestedFunction = {
//     name: "something",
//     fun: function () {
//         let product = {
//             name: "Iphone",
//             printName: () => {
//                 console.log(this.name);
//             }

//         }
//         product.printName()
//     }


// }

// nestedFunction.fun()



function fun4() {
    let name = "something"
    let product = {
        name: "Iphone",
        printName: function () {
            const print = () => {
                console.log(this.name);
            }
            print()
        }
    }

    product.printName()
}

fun4()



function fun1() {

    let name = "Ayush";

    function fun2() {
        console.log(name);
    }

    name = "Ayush chauhan"
    return fun2;
}

let result2 = fun1()
result2();


console.log(this);

console.log(global === globalThis );

// var a = 7;
// console.log(this.a);

// function fun1 (){
//     console.log("Function",this);
// }

// fun1()