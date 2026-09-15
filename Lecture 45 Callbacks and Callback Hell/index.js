// function fun1(callback){
//     console.log("hii");
//     callback()
// }
// function cb(){
//     console.log("this is callback function");
// }

// fun1(cb)



function searchPizza(cb) {
    console.log("Pizza Searching...");
    setTimeout(function () {
        console.log("Here is the pizaa menu.");
        let price = 500;
        cb(price)

    }, 2000)
}

function addToCart(cb2) {
    console.log("Pizza adding to cart...");
    setTimeout(function () {
        console.log("pizza added to cart");
        cb2()
    }, 3000)
}

function payment(price, cb3) {
    console.log(`payment initiated , Amount: ${price}`);
    setTimeout(function () {
        console.log(`payment completed , Amount: ${price}`);
        cb3()
    }, 5000)
}

searchPizza(function (price) {
    addToCart(function () {
        payment(price, function () {
            console.log("Pizza on the way");
        })
    })
})

