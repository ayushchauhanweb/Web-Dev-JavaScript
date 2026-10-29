let student = {
    name: "Ayush",
    rollNo: 15,
    subjects: ["eng", "math", "sci"]
}

// How to rename key

// let { subjects: vishay, ...hello } = student;
// console.log(vishay);


// Object merging 

// let obj1 = {
//     name:"Yash",
//     phone: 457856134
// }

// let obj2 = {
//     address: "India",
//     addharCard: 8795646514,
//     name: "Ayush"
// }

// let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


// Array and Object update

// const arr =[5,6,4,8]
// arr[1]="updated"
// console.log(arr);


const obj = {
    name: "Ayush",
    rollNo: 18,
    address: null
}

// obj["name"] = "khushi"
// obj.name = "dash"

// delete obj.rollNo // Property delete karta hai

// console.log(obj);

// console.log(obj.address);


let arr1 = [1, 6, 7, 5, 8]
// arr1.splice(1,2);
// console.log(arr1);

// let trimArr = arr1.slice(1,3)

// console.log(trimArr);

// console.log(arr1.indexOf(8));


let res = arr1.find((value) => {
    return value === 5
})

// console.log(res);


let resIndex = arr1.findIndex((value) => {
    return value === 5
})

// console.log(resIndex);

// Flat

let res3 = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12, 13]]]

// console.log(res3.flat(Infinity));


// Mutability 

let arr = [4,5,6,7,8,9]
let arrCopy = arr;
let arrCopy2 = [...arr];

arrCopy2.pop()

console.log("arr",arr);
console.log("arrcopy2",arrCopy2);
