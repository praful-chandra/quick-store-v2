import React from 'react'

import CategoryPopularThumb from "../../../components/category/category-popular/category-popular-thumb.component";
import CategoryPopularDetail from "../../../components/category/category-popular/category-popular-details.component";
export default function Categories(props) {
    return (
        <div className="categories-wrapper" >
            <div className="categories-popular-wrapper">
                <CategoryPopularThumb />
                <CategoryPopularDetail />
            </div>
        </div>
    )
}
