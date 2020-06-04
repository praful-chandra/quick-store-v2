import React from 'react'

import HollowButton from "../hollowButton/hollowbutton.component";

export default function BigItem() {
    return (
        <div 
        className="bigitem-wrapper"
        style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${require("../../assets/fezbot2000-nahUo1GhcrA-unsplash.jpg")})`}}>
        >
            <div className="bigitem-content">
                <div className="bigitem-content-title">
                    Best Sellers
                </div>
                <HollowButton
                    message="shop now"
                    size="15rem"
                    fontSize="2rem"
                    color="#fff"
                    padding="1rem"
                    margin="1rem"
                 />
            </div>
        </div>
    )
}
