let user = {
    name: "Ayush",
    year: 2008

}
// console.log(user);

let arr = [1, 2, 3]

// console.log(arr.__proto__.__proto__ === user.__proto__);

Object.prototype.allInOne = function () {
    console.log("This is all in function");
}

Array.prototype.printItems = function (arr) {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);

    }
}

console.log(arr.__proto__)

let color = ["red", "green", "blue"]

arr.printItems(arr)
color.printItems(color)

String.prototype.firstTwoCharacter = function () {
    console.log(this[0] + this[1]);
}

"Ayush".firstTwoCharacter()

"djkdjija".allInOne()
arr.allInOne()
user.allInOne()


function random() {

}

random.allInOne()

Number(1).allInOne()




// Shadow



let common = {
    eat() {
        console.log("Eat");
    }
}

let person = Object.create(common)

person.walk = function walk() {
    console.log("Walk");
}

let student = Object.create(person)

student.study = function study() {
    console.log("Study");
}

console.log(person);
console.log(student);

student.eat()

console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("eat"));

console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

console.log(student.__proto__);
console.log(student.__proto__.__proto__);

class User {
    country = "india" // default property
    constructor(name, country2) {
        this.name = name // instance property
        this.country = country2 // instance property
    }


    printName() { // instance method
        console.log(this.name);
    }
}


const u1 = new User("Nishant", "India")
const u2 = new User("Ayush", "India")

console.log(u1);
console.log(u2);

// console.log(u1.printName() === u2.printName());



class BankAccount {
    #balance; // this is private property
    static totalBankAccount = 0;
    constructor(initialBalance) {
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;
    }

    get() { // method
        console.log(this.#balance);
    }

    withdraw(amount) { // method
        if (amount > this.#balance) {
            console.log("Not sufficient balance");
            return
        }

        this.#balance = this.#balance - amount
    }

    deposit(amount) { // method
        if (amount <= 0) {
            console.log("error");
            return
        }
        this.#balance = this.#balance + amount
    }

    static calculateTax(){ // static method
        console.log("calculating tax...");
    }
}

let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);

console.log(acc1 instanceof User);
console.log(acc2 instanceof BankAccount);
console.log(new Number(1) instanceof Object);