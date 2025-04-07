import { add_to_cart, remove_from_cart } from "../constants"

export const addToCart = (data) => {
    return {
        type: add_to_cart,
        data: data
    }
}

const removeFromCart = (data) => {
    return {
        type: remove_from_cart,
        data: data
    }
}