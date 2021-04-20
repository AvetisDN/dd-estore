import {writable} from "svelte/store";

const PRODUCTS = [
    {
        id: Math.random().toString(36).substr(2,9),
        name: 'Galaxy Buds Pro',
        brand: 'Samsung',
        price: 250,
        image: './products/galaxy-buds-pro.webp'
    },
    {
        id: Math.random().toString(36).substr(2,9),
        name: 'Air Pods Pro',
        brand: 'Apple',
        price: 280,
        image: './products/apple-airpods-pro.jpg'
    },
    {
        id: Math.random().toString(36).substr(2,9),
        name: 'Galaxy Buds Pro',
        brand: 'Buds Pro',
        price: 190,
        image: './products/realme-buds-pro.jpg'
    },
    {
        id: Math.random().toString(36).substr(2,9),
        name: 'Air Dots Pro',
        brand: 'Xiaomi',
        price: 150,
        image: './products/mi-airdots.jpg'
    },
]

const {subscribe,set} = writable(PRODUCTS)


const reset = () => {
    set(PRODUCTS)
}

export default {
    subscribe,
    reset
}