import {writable} from "svelte/store";

const CART = JSON.parse(localStorage.getItem('estore-cart')) || []

const {subscribe,set,update} = writable(CART)

const reset = () => {
    set(CART)
}

const addToCart = (product) => update((cart) => {
    let index = cart.findIndex((cartItem) => cartItem.id === product.id)
    if(index !== -1) {
        cart[index].quantity++
    } else {
        product.quantity = 1
        cart = [...cart,product]
    }

    localStorage.setItem('estore-cart', JSON.stringify(cart))
    return cart

})

const deleteFromCart = (id) => update((cart) => {
    let index = cart.findIndex((cartItem) => cartItem.id === id)
    let tmp = cart
    tmp.splice(index, 1)
    cart = tmp
    localStorage.setItem('estore-cart', JSON.stringify(cart))
    return cart
})
const increaseQuantity = (id) => update((cart) => {
    let index = cart.findIndex((cartItem) => cartItem.id === id)
    cart[index].quantity++
    localStorage.setItem('estore-cart', JSON.stringify(cart))
    return cart
})
const decreaseQuantity = (id) => update((cart) => {
    let index = cart.findIndex((cartItem) => cartItem.id === id)
    if(cart[index].quantity > 1) {
        cart[index].quantity--
        localStorage.setItem('estore-cart', JSON.stringify(cart))
    }
    return cart
})
const isInCart = (id, cart) => {
    let index = cart.findIndex((cartItem) => cartItem.id === id)
    return index !== -1
}
const totalSumm = (cart) => {
    let total = 0
    cart.forEach((cartItem) => {
        total += cartItem.quantity * cartItem.price
    })
    return total
}
const totalProducts = (cart) => {
    let total = 0
    cart.forEach((cartItem) => {
        total += cartItem.quantity
    })
    return total
}

export default {
    subscribe,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
    totalSumm,
    totalProducts,
    reset
}