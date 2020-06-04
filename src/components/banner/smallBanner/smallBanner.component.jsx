import React from 'react';

import HollowButton from "../../hollowButton/hollowbutton.component";




export default function SmallBanner() {
    return (
        <div className="smallbanner-wrapper" 
        style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${require("../../../assets/parker-burchfield-tvG4WvjgsEY-unsplash.jpg")})`}}>
            <div className="smallbanner-content">
                <div className="smallbanner-content-title">
                    the cotton collection
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
