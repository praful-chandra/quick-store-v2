import React from 'react'

export default function HollowButton(props) {
    return (
        <div className="hollowbutton-wrapper" style={{width : props.size || "29rem"}}>
            {props.message}
        </div>
    )
}
