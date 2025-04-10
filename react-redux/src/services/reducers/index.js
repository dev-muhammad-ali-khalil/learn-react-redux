import { combineReducers } from 'redux'
import cardItems from "./reducer";
import userReducer from './user.reducer';

export default combineReducers({
    cardItems,
    userReducer
})

// const object = {
//     cardItems,
//     userReducer
// }

// export default combineReducers(object)