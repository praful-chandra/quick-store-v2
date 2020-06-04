import {combineReducers} from "redux";

import subNavReducer from "./subNav.reducer";

export default combineReducers({

    subNav : subNavReducer

});