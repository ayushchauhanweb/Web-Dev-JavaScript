function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun1")
        }, 3000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun2")
        }, 1000)
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("fun3")
        }, 4000)
    })
}

// let result = Promise.all([fun1(), fun2(), fun3()])
// let result = Promise.allSettled([fun1(), fun2(), fun3()])
// let result = Promise.race([fun1(), fun2(), fun3()])
let result = Promise.any([fun1(), fun2(), fun3()])

result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})