
// Arthematic operators

// let num1 = 2;
// let num2 = 4;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);



// Case sensitive


// let Name = "Ayush";
// let name = "Hello";
// let Name = "Nope";

// let num = 45;
// // num++
//  console.log(++num) // 46  -> Pre-incriment
// console.log(num++); // 46
// console.log(num);   // 47


// let num = 45;
// // num++
//  console.log(--num) // 44 -> Pre-incriment
// console.log(num--);//  44
// console.log(num);//  43


// let num = 2;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);



// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6);
// console.log(3 < 6);
// console.log(3 >= 6);
// console.log(3 <= 6);
// console.log(3 == 6);
// console.log(3 != 6);


// Loose equality 
// console.log("5" == 5);


// Strict equality
// console.log("5" === 5);


// console.log(true && true);
// console.log(false || true);

// const age = 18;
// const hasId = true ;

// const canEnterClub = age>=18 && hasId === true;
// console.log(canEnterClub)


// console.log(!3738);


// const isLoggedIn = false 

// if(isLoggedIn){
//     console.log("you can like,comment");
// } else{
//     console.log("Please login first")
// }


// let day = "usdhu";

// if (day === "mon") {
//     console.log("1st day of the week");

// } else if (day === "tue") {
//     console.log("2nd day of week");

// } else if (day === "wed") {
//     console.log("3rd day of week");

// } else if (day === "thu") {
//     console.log("4th day of week");

// } else if (day === "fri") {
//     console.log("5th day of week");

// } else if (day === "sat") {
//     console.log("6th day of week");

// } else if (day === "sun") {
//     console.log("7th day of week");

// } else { console.log("wrong day") };



// nested

const isLoggedIn = true;
const isSubscribed = false;

if (isLoggedIn) {
    if (isSubscribed) {
        console.log("you can access the premium content");
    } else {
        console.log("you don't have any plan to access premium content");
    }
} else {
    console.log("please login first");

}



// Switch case


const day = "sat";

switch (day) {
    case "mon":
        console.log("1st day of the week");
        break;
    case "tue":
        console.log("2nd day of the week");
        break;
    case "wed":
        console.log("3rd day of the week");
        break;
    case "thu":
        console.log("4th day of the week");
        break;
    case "fri":
        console.log("5th day of the week");
        break;
    case "sat":
        console.log("6th day of the week");
        break;
    case "sun":
        console.log("7th day of the week");
        break;
    default:
        console.log("wrong day");

}
