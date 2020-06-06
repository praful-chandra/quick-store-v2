import React from 'react'

import HeroBanner from "../../../components/banner/heroBanner/herobanner.component";
import ProductItem from "../../../components/productItem/productitem.component";

import HollowButton from "../../../components/hollowButton/hollowbutton.component";

export default function ProductsScreen() {
    return (
        <div className="products-wrapper" >
            <HeroBanner />
            <div className="products-itemgrid">
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
