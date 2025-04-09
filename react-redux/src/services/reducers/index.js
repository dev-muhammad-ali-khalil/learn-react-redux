import { combineReducers } from 'redux'
import cardItems from "./reducer";
import userReducer from './user.reducer';


const object = {
    cardItems,
    userReducer
}

export default combineReducers(object);

// export default combineReducers({
//     cardItems,
//     userReducer
// });