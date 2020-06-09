import React,{useState,useEffect} from 'react'
import {connect} from "react-redux";

import HomePageComponentLeft from "./homepage-content-left/homepage-content-left.component";
import HomePageComponentRight from "./homepage-content-right/homepage-content-right.component";

import {getProductsAsync} from "../../../redux/action/product.action";

 function Homepage_Content(props) {
    const [options,optionsHandler] = useState({sort : "createdAt"});
    const [direction,directionHandler] = useState({direction : true});
    const [only , setOnly] = useState({});

    const handleOption = option =>{
        optionsHandler({
            ...options,
            [option.type] : option.value
        })
    }
    
   
    

    const getProductsAsync = props.getProductsAsync;

    useEffect(()=>{
        const filter = {
            sort :{ [options.sort] : direction ? 1 : -1},
            only:only
        }
        getProductsAsync(filter);
        
    },[direction,options,getProductsAsync,only])
    

    return (
        <div className="homepage_content-wrapper">
            <HomePageComponentLeft only={setOnly}/>
            <HomePageComponentRight sort={handleOption} direction={direction} directionHandler={directionHandler}/>
        </div>
    )
}

const mapStateToProps = state =>({
    products : state.products
})

export default connect(mapStateToProps,{getProductsAsync})(Homepage_Content);