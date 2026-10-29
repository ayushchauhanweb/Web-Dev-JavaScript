
// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")

// let btn = document.querySelector("#btn")

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log("Target", event.target);
//     console.log("Current Target", event.currentTarget);

//     h1.classList.remove("hidden")
//     // h1.classList.add("visible")

// }

// div.addEventListener('click', revealGift)

// // div.addEventListener('click', () => {
// //     console.log("Helloo ");
// // })


// let counter = 0;

// function fun1(e) {
//     if (counter < 3) {
//         console.log(e);
//         counter++

//     } else {
//         btn.removeEventListener('click', fun1)

//     }
// }

// btn.addEventListener('click', fun1)


// // Capturing Target Event Bubbling

// let outer = document.querySelector("#outer")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Body");

// })

// outer.addEventListener('click', (e) => {
//     e.stopPropagation()

//     console.log("Outer");

// })

// inner.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Inner");

// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Btn2");

// })


let products = [
    {
        id: "1",
        name: "Iphone 20",
        price: 10000,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "2",
        name: "samsung s23",
        price: 56000,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "3",
        name: "poco m7",
        price: 23000,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "4",
        name: "lava blaze",
        price: 12300,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "5",
        name: "oppo k13",
        price: 30044,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    }
]


let productList = document.querySelector("#product-details")


products.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("singleProduct")
    card.dataset.productId = product.id
    const dltBtn = document.createElement("button")
    const addToCartBtn = document.createElement("button")
    dltBtn.textContent = "Remove Product"
    addToCartBtn.textContent = "Add to cart"

    // dltBtn.addEventListener('click', (e) => {
    //     card.remove()

    // })

    card.innerHTML = `<div>
        <img src="${product.imgUrl}"></img>
    </div>

    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    card.append(dltBtn)
    card.append(addToCartBtn)

    productList.append(card)
})


productList.addEventListener('click', (e) => {
    e.stopPropagation();

    const dltBtn = e.target

    console.log(dltBtn.parentElement);
    console.log(dltBtn.tagName);
    console.log(dltBtn.textContent);

    // if(e.target.tagName==="BUTTON"){
    //     e.target.parentElement.remove()
    // }

    console.log(dltBtn.parentElement.dataset.productId);
    if (dltBtn.textContent === "Remove Product" && dltBtn.tagName === "BUTTON") {
        dltBtn.parentElement.remove()
        dltBtn.closest(".singleProduct").remove()

    }

    // console.log(dltBtn.closest("singleProduct"));
})