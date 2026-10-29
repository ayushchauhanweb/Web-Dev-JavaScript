async function fun2() {
    return 2
}

function fun1() {

    // return Promise.resolve(10)

    return 10
}

// fun2().then((data) => {
//     console.log(data);
// })
// console.log(fun1());


// async function fun3() {
//     return "Hello"
// }

// fun3().then((data) => {
//     console.log(data);
// })

// function fun4() {
//     return Promise.resolve("hii")
// }

// console.log("1");

// async function fun5() {
//     // fun3().then((data) => {
//     //     console.log(data);
//     // })

//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data, data2);
// }

// console.log("Ayush");

// fun5()

// console.log("5");

// let data;

// async function userData() {
//     return { name: "Ayush" }
// }

// function fun4() {
//     return Promise.reject("error aa gya")
// }


// async function fun5() {
//     // fun3().then((data) => {
//     //     console.log(data);
//     // })
//     try {
//         data = await userData()
//         let data2 = await fun4()
//         console.log(data, data2);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Ye to hamesha chalega");
//     }

// }

// fun5()



function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })

}

function addToCart() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza Added to cart");
            resolve()
        }, 3000)
    })
}

function paymet(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = true

            if (isPaymentSuccessful) {
                console.log(`Payment Completed, Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000)
    })
}


// searchPizza().then(function(price){
//     console.log(price);
// })

// let res = searchPizza()

// res.then(function (price) {
//     return addToCart(price)
// }).then(function (price) {
//     return paymet(price)
// }).then(function () {
//     console.log("Bss Aa hee gaya Pizza");
//     console.log(err);
// })


async function orderFood() {
    try{
        price = await searchPizza()
        await addToCart()
        await paymet(price)
        console.log("Pizza on the way");
    }catch(error){
        console.log(error);
    }
}

orderFood()