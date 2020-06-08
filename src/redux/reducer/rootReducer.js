import {combineReducers} from "redux";

import subNavReducer from "./subNav.reducer";
import productsReducer from "./products.reducer";

export default combineReducers({

    subNav : subNavReducer,
    products : productsReducer
});