let pro1Name = "t-shirt";
let pro1price = 235;

console.log(pro1Name,pro1price);

let pro2Name = "pant";
let pro2price = 785;


let pro3Name = "coat";
let pro3price = 999;


let products = ["t-shirt", "pant", "coat", "lower"];
console.log(products[3], products[1]);

console.log(products.length);

console.log(products[products.length - 4]);

console.log(products.at(-1));

// for (i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }


// let products = [["t-shirt",235], ["pant",785], ["coat",999], ["lower",599]];

// // let firstProduct = products[0];
// // console.log(firstProduct[0]);
// // console.log(products[0][0]);

// for (i = 0; i < products.length; i++) {
//     // console.log(products[i][1]); // wrong way kal object me shi karenge   
//     console.log(products[i][0],products[i][1]);   
// }


// Some methods

// let products = ["t-shirt", "pant", "coat", "lower"];
// products.push("hello");// end me add karta hai

// products.pop()// Last se delete karta hai

// products.unshift("hello")// start me aad karta hai

products.shift()// start se add karta hai

console.log(products);