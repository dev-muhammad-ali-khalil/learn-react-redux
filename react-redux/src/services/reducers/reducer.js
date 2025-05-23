import { add_to_cart, remove_from_cart } from "../constants"

const initialState = {
    cardData: [],
    totalCount: 0,
    totalPrice: 0
}

const cardItems = (state = initialState, action) => {
    switch (action.type) {
        case add_to_cart:
            return {
                ...state,
                cardData: [...state.cardData, action.data]
            }
        case remove_from_cart:
            return {
                ...state,
                cardData: state.cardData.filter(item => item.id !== action.id)
            }

        default:
            return state

    }
}

export default cardItems