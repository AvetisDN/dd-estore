import {writable} from "svelte/store";

const CART = []

const {subscribe,set,update} = writable(CART)


const reset = () => {
    set(CART)
}

const addToCart = (product) => update((cart) => {

})

const deleteFromCart = (id) => update((cart) => {

})
const increaseQuantity = (id) => update((cart) => {

})
const decreaseQuantity = (id) => update((cart) => {

})
const isInCart = (id) => {

}

export default {
    subscribe,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
    reset
}