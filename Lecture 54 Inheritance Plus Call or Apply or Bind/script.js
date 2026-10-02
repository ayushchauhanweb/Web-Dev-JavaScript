
let user1 = {
    name: "Ayush",
    age: 18,
    // printName() {
    //     console.log(`Hii, My name is ${this.name}`);
    // }
}

let user2 = {
    name: "bahbs",
    age: 25,

}

function printName(country, state) {
    console.log(`Hii, My name is ${this.name}, from ${country},${state}`);
}

// user1.printName()
// user1.printName.call(user2)

// printName.call(user1,"India","Delhi")
// printName.call(user2,"Australia","Sydney")

// printName.apply(user1, ["India","Delhi"])
// printName.apply(user2, ["Australia","Sydney"])

const newFun = printName.bind(user1, "India", "Delhi")
console.log(newFun);

newFun()