import { add_to_cart, remove_from_cart } from "../constants"

export const addToCart = (data) => {
    return {
        type: add_to_cart,
        data: data
    }
}

export const removeFromCart = (id) => {
    return {
        type: remove_from_cart,
        id: id
    }
}