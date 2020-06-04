import React from 'react';

import ItemBar from "../../../components/itembar/itembar.component";
import SmallBanner from "../../../components/banner/smallBanner/smallBanner.component";
import BigItem from "../../../components/bigitem/bigitem.component";
import BigBanner from "../../../components/banner/bigBanner/bigbanner.component";


export default function WhatsNew() {
    return (
        <div className="whatsnew-wrapper">
            <SmallBanner />
            <ItemBar />
            <div className="whatsnew-bigitem-wrapper">
                <BigItem />
                <BigItem />
            </div>
            <ItemBar />
            <BigBanner />
        </div>
    )
}
