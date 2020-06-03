import React from 'react'

import HeadingText from "../../../../components/headingText/headingtext.component";
import ActionBar from "../../../../components/actionbar/actionbar.component";
import ProductItem from "../../../../components/productItem/productitem.component";
import HollowButton from "../../../../components/hollowButton/hollowbutton.component";

export default function Homepage_content_right() {
    return (
        <div className="homepage_content-right-wrapper" >
            <HeadingText text="New" size="6rem" />
            <ActionBar />
            <div className="homepage_content-itemgrid">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

            <HollowButton message="Load More" />

        </div>
    )
}
