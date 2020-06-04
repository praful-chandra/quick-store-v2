import React from 'react'

export default function BigBanner() {
    return (
        <div 
        className="bigbanner-wrapper"
        style={{backgroundImage : `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${require("../../../assets/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg")})`}}>
         >
            <div className="bigbanner-content">
            ONE STOP FOR ALL FASHION PROBLEMS
            </div>
        </div>
    )
}
