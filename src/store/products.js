import {writable} from "svelte/store";

const PRODUCTS = [
    {
        id: 'Qwerty00',
        name: 'Galaxy Buds Pro',
        brand: 'Samsung',
        price: 250,
        image: './products/galaxy-buds-pro.webp'
    },
    {
        id: 'Qwerty01',
        name: 'Air Pods Pro',
        brand: 'Apple',
        price: 280,
        image: './products/apple-airpods-pro.jpg'
    },
    {
        id: 'Qwerty02',
        name: 'Galaxy Buds Pro',
        brand: 'Buds Pro',
        price: 190,
        image: './products/realme-buds-pro.jpg'
    },
    {
        id: 'Qwerty03',
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