
// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("hii")
// let h1 = document.querySelector(".hii")
// let h1 = document.querySelector("#hii")

// let h1 = document.querySelectorAll("#hii")
// console.log(h1);

let p = document.querySelector("#desc")

p.textContent = "Hello how are you?"
p.innerHTML = "<b>Hello Ayush</b>" // very very risky

console.log(p.textContent);
console.log(p.innerHTML);

p.setAttribute("style", "background-color:pink; font-size :30px")

let btn = document.querySelector("#btn")

btn.setAttribute("disabled", "true")
btn.textContent = "Remove"


let res = p.getAttribute("style")

console.log(res);



p.removeAttribute("style")

p.classList.add("random")
p.classList.remove("random")
p.classList.toggle("random")


console.log(p.classList.contains("random"));


p.style.backgroundColor = "red" // camel case

p.dataset.helloFriends = "hii"

console.log(p.dataset.helloFriends);



let products = [
    {
        name: "Iphone 20",
        price: 10000,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "samsung s23",
        price: 56000,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "poco m7",
        price: 23000,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "lava blaze",
        price: 12300,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "oppo k13",
        price: 30044,
        imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/41owF0j7oGL._SY300_SX300_QL70_FMwebp_.jpg"
    }
]


let div = document.createElement("div")
let div2 = document.createElement("div")

div.textContent = "hello"
div2.textContent = "Div 2"

let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div,div2) // insert in last in body
// body.prepend(div,div2) // insert in first in body



let productList = document.querySelector("#product-details")


products.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("singleProduct")
    card.innerHTML = `<div>
        <img src="${product.imgUrl}"></img>
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    productList.append(card)
})


let h2 = document.querySelector("h2")

// body.removeChild(h2) // You have to perform on parent

h2.remove() // Directly on element which you want to remove


let clone = productList.cloneNode(true)

// body.append(clone)
console.log(clone);


const items = productList.children

productList.insertBefore(h2, items[2]) // For precise positioning