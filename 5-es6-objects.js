// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,           // stays for name: name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// 1) simple way to get Object values
// const label = product.label
// const stock = product.stock

// 2) second way to get product values, the simple way would be...
// const(label, stock) = product

// 3) renaming and adding new variables
// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

// I call some 
transaction('order', product)