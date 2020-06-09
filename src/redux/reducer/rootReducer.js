import {combineReducers} from "redux";

import subNavReducer from "./subNav.reducer";
import productsReducer from "./products.reducer";
import categoryReducer from "./category.reducer";

export default combineReducers({

    subNav : subNavReducer,
    products : productsReducer,
    category : categoryReducer
});