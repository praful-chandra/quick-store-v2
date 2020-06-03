import React from 'react'

import HeadingText from "../../../../components/headingText/headingtext.component";
import ActionBar from "../../../../components/actionbar/actionbar.component";

export default function Homepage_content_right() {
    return (
        <div className="homepage_content-right-wrapper" >
            <HeadingText text="New" size="6rem" />
            <ActionBar />
        </div>
    )
}
