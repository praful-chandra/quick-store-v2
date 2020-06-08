import React,{useState,useEffect} from 'react'
import {connect} from "react-redux";

import HomePageComponentLeft from "./homepage-content-left/homepage-content-left.component";
import HomePageComponentRight from "./homepage-content-right/homepage-content-right.component";

import {getProductsAsync} from "../../../redux/action/product.action";

 function Homepage_Content(props) {
    const [options,optionsHandler] = useState({sort : {createdAt : 1}});

    
    useEffect(()=>{
        if(!props.products.init){
            props.getProductsAsync(options);
        }
    })

    console.log(options);
    

    return (
        <div className="homepage_content-wrapper">
            <HomePageComponentLeft />
            <HomePageComponentRight sort={optionsHandler} />
        </div>
    )
}

const mapStateToProps = state =>({
    products : state.products
})

export default connect(mapStateToProps,{getProductsAsync})(Homepage_Content);