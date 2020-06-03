import React from 'react'


import HomePageComponentLeft from "./homepage-content-left/homepage-content-left.component";
import HomePageComponentRight from "./homepage-content-right/homepage-content-right.component";

export default function Homepage_Content() {
    return (
        <div className="homepage_content-wrapper">
            <HomePageComponentLeft />
            <HomePageComponentRight />
        </div>
    )
}
