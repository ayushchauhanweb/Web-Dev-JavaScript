
// let student1 = 50 + 75 + 72;
// let student2 = 40 + 78 + 93;
// let student3 = 36 + 45 + 63;


// function totalMarks(studentName, mathMarks, scienceMarks, hindiMarks) {
//     console.log(`${studentName}Total marks:`, mathMarks + scienceMarks + hindiMarks);

// }
// totalMarks("student1: ", 50, 75, 72)
// totalMarks("student2: ", 40, 78, 93)
// totalMarks("student3: ", 36, 45, 63)



// function greetinMsg(userName = "Guest", greeting = "Hii") {
//     console.log(`${greeting}`, userName);

// }

// greetinMsg("Ayush","Hello")
// greetinMsg("Ayush chauhan")
// greetinMsg()



// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//     }

// }
// calculator(5, 3, "+")


// function totalMarks(mathMarks, scienceMarks, hindiMarks) {
//     // console.log(`${studentName}Total marks:`,mathMarks+scienceMarks+hindiMarks);
//     return mathMarks + scienceMarks + hindiMarks;

// }

// function calPercentage(studentName, mathMarks, scienceMarks, hindiMarks) {
//     let total = totalMarks(mathMarks, scienceMarks, hindiMarks);
//     let percentage = (total / 300) * 100;
//     console.log(`${studentName} Total percentage:`, percentage.toFixed(2));

// }
// calPercentage("student 1: ", 50, 75, 72);

// After array class

// let students = [["student1: ", 50, 75, 72], ["student2: ", 40, 78, 93], ["student3: ", 36, 45, 63]]

// for (i = 0; i < students.length; i++) {
//     calPercentage(students[i][0], students[i][1], students[i][2], students[i][3])
// }

// 

// totalMarks("student1: ", 50, 75, 72)
// totalMarks("student2: ", 40, 78, 93)
// totalMarks("student3: ", 36, 45, 63)




// Function declaration

fun1()
function fun1() {
    console.log("function declaration");
}


// Function expression

// console.log(add(7, 5));
// let add = function add(num1, num2) {
//     return (num1 + num2);
// }


// Arrow function

//Syntax 1
// let add = num1 => num1 + 4;

// //Syntax 2
// let add = (num1, num2) => num1 + num2;

// // Syntax 3
// let add = (num1, num2) => {
//     //something
//     //something
//     return num1 + num2;
// }

// console.log(add(7, 5));
