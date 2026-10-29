let product1 = ["iphone", 50000, 4.5]

let product2 = {
    productname: "iphone 20 pro max ",
    price: 50000,
    avgRating: 4.5,
    totalRevies: 75,
    discount: 10,
    printProductName: function () {
        console.log(this.productname);
    },
    printDiscount() {
        console.log("10%");
    }

}
console.log(Object.keys(product2));
console.log(Object.values(product2));
console.log(Object.entries(product2));


// product2.printProductName()
// product2.printDiscount();
// console.log(product2.discount);


// for(value of product1){
//     console.log(value);
// }

// product1.forEach(function(value,index){
//     console.log(value,index);

// })



// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }
// b(function a(){
//     console.log("5");
// })


// for(value in product1){
//     console.log(value);
// }


// Destructring

// const [productName,price,rating] = ["iphone", 50000, 4.5]
// console.log(productName);

// let { price, productname, totalRevies } = product2 // React me bohot use karenge
// console.log(price, productname);

// for ([key , value] of Object.entries (product2)){
//     console.log(key);
// }


// let arr = [45,6,5,89,4,56,12,78,556,777,]
// console.log(arr);
// console.log(...arr);
// console.log(Math.min(...arr));


// let a = [5,2]
// let b = [5,4]

// let c = [...a,...b] // array merging by spread operator
// console.log(...c);


// const [productName, price, ...hello] = ["iphone", 50000, 4.5]
// console.log(hello);

