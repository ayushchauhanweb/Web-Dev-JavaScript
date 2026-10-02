class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    logIn() { console.log("logIn"); }
    logOut() { console.log("logOut"); }
}

class Customer extends User {
    cart = []

    constructor(name, email) {
        super(name, email)
        // this.name = name
        // this.email = email
    }

    buyProduct() { console.log("buyProduct"); }
    addToCart(item) { this.cart.push(item) }
    showCartItem() { console.log(this.cart); }
    // logIn() { }
    // logOut() { }
}


class Seller extends User {

    // constructor(name, email) {
    //     this.name = name
    //     this.email = email
    // }

    addProduct() { }
    // logIn() { }
    // logOut() { }
}

class Admin extends User {

    // constructor(name, email) {
    //     this.name = name
    //     this.email = email
    // }

    hideProduct() { }
    // logIn() { }
    // logOut() { }
}

const c1 = new Customer("Ayush Chauhan", "ayushchauhan@gmail.com")
// const s1 = new Seller("seller", "seller@gmail.com")
// const a1 = new Admin("admin", "admin@gmail.com")

// console.log(c1);
// // console.log(s1);
// // console.log(a1);
// c1.addToCart("Laptop")
// c1.showCartItem()
// c1.logIn()


class PremiumCuatomer extends Customer {
    constructor(name, email) {
        super(name, email)
    }
}

const pc1 = new PremiumCuatomer("hjsh", "uydna")
console.log(pc1);