import {combineReducers} from "redux";

import subNavReducer from "./subNav.reducer";
import productsReducer from "./products.reducer";
import categoryReducer from "./category.reducer";
import campaignReducer from "./campaign.reducer";

export default combineReducers({

    subNav : subNavReducer,
    products : productsReducer,
    category : categoryReducer,
    campaign : campaignReducer
});