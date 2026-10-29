// let count = 0;

// function counter() {
//     count = count + 1
//     console.log(count);
// }

// counter()
// counter()


// function counter() {
//     let count = 0;
//     count = count + 1
//     console.log(count);
// }

// counter()
// counter()

let username = "Ayush";

function outerFunction() {
    console.log(username); // 1st Output?

    if (true) {
        let username = "Ronak";
        console.log(username); // 2nd Output?
    }

    console.log(username); // 3rd Output?
}

outerFunction();
