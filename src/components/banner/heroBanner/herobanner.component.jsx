import React from 'react'

export default function HeroBanner() {
    return (
        <div className="herobanner-wrapper" >
            <img className="herobanner-image" src={require("../../../assets/calvin-lupiya--yPg8cusGD8-unsplash.jpg")} alt=""/>
            <div className="herobanner-title">T-Shirts</div>
        </div>
    )
}
