import React,{useState,useEffect} from 'react'
import {connect} from "react-redux";

import HomePageComponentLeft from "./homepage-content-left/homepage-content-left.component";
import HomePageComponentRight from "./homepage-content-right/homepage-content-right.component";

import {getProductsAsync} from "../../../redux/action/product.action";

 function Homepage_Content(props) {
    const [options,optionsHandler] = useState({sort : "createdAt"});
    const [direction,directionHandler] = useState({direction : true});
    
    const handleOption = option =>{
        optionsHandler({
            ...options,
            [option.type] : option.value
        })
    }
    
    // useEffect(()=>{
    //     if(!props.products.init){
    //         props.getProductsAsync(options);
    //     }
    // })

    const getProductsAsync = props.getProductsAsync;

    useEffect(()=>{
        const filter = {
            sort :{ [options.sort] : direction ? 1 : -1}
        }
        getProductsAsync(filter);
        
    },[direction,options])
    

    return (
        <div className="homepage_content-wrapper">
            <HomePageComponentLeft />
            <HomePageComponentRight sort={handleOption} direction={direction} directionHandler={directionHandler}/>
        </div>
    )
}

const mapStateToProps = state =>({
    products : state.products
})

export default connect(mapStateToProps,{getProductsAsync})(Homepage_Content);