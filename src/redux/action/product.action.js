import axios from "axios";

import {PRODUCT_ACTIONS} from "./action.types";

const productLoading = () =>({
    type : PRODUCT_ACTIONS.PRODUCT_LOADING
})
const productLoadingDone = () =>({
    type : PRODUCT_ACTIONS.PRODUCT_LOADING_DONE
})

const getProducts = (products) =>({
    type : PRODUCT_ACTIONS.GET_PRODUCTS,
    payload : products
})

export const getProductsAsync = (options) =>async dispatch =>{
    dispatch(productLoading());

    try{      
        console.log(options);
        
        const products = await axios.post("/api/get/products",options);
        dispatch(getProducts(products.data));
    }
    catch (err){
        console.log(err);        
    }
    finally{
        dispatch(productLoadingDone());
  
    }
}