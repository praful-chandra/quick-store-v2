import React from 'react'

import CampaignCard from "../../../components/campaigncard/campaignCard.component";

import SmallBanner from "../../../components/banner/smallBanner/smallBanner.component";

export default function Campaign() {
    return (
        <div className="campaign-wrapper" >
            <SmallBanner/>
            <div className="campaign-grid">
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            </div>
            <SmallBanner/>
            <div className="campaign-grid">
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            </div>
        </div>
    )
}
