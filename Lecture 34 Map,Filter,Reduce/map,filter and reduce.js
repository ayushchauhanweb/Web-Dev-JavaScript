let originalPrice = [455, 999, 599, 199]

let discountedPrice = []

for (value of originalPrice) {
    discountedPrice.push(value * 0.9) // Discount for 10%
}

// console.log(originalPrice);
// console.log(discountedPrice);

const discountedPrice2 = originalPrice.map((value) => value * 0.9)

// console.log(discountedPrice2);

const students = [
    {
        name: "Ayush",
        marks: 90,
    },
    {
        name: "Ronak",
        marks: 85,
    },
    {
        name: "Toufiq",
        marks: 90,
    },
    {
        name: "Ankush",
        marks: 80,
    },
    {
        name: "Student1",
        marks: 30
    },
    {
        name: "Student2",
        marks: 28

    }
]

// let studentsnames = []

// students.forEach((value) => studentsnames.push(value.name))

const studentsnames = students.map((student) => student.name)
const studentsmarks = students.map((student) => student.marks)

console.log(studentsnames, studentsmarks);

// const graceMarks = students.map((student)=>{
//     return {...student , marks: student.marks + 10}
// })

const graceMarks = students.map(student => ({ ...student, marks: student.marks + 10 }))

// console.log(graceMarks);

// let failedStudents = []
// students.forEach((student) => {
//     if(student.marks<33){
//             failedStudents.push(student)
//     }
// })

// const failedStudents = students.filter((student) => student.marks < 33)

const failedStudents = students.filter((student) => student.marks < 33).map((students) => students.name)

console.log(failedStudents);


let marks = [50, 65, 89, 41, 63]
// let totalMarks = 0

// marks.forEach((marks) => totalMarks = totalMarks + marks)
// console.log(totalMarks);

const totalMarks = students.reduce((accumulator, student) => {
    accumulator = accumulator + student.marks
    return accumulator
}, 0)
console.log(totalMarks);


let attendence = ["Present", "Present", "Absent", "Present", "Absent"]

// let obj = {}

// attendence.forEach((value) => {

//     if (obj[value]) {
//         obj[value] = obj[value] + 1

//     } else {
//         obj[value] = 1
//     }

// })

const obj = attendence.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1
    return accumulator

}, {})
console.log(obj);