import React from "react";

export default function CampaignCard() {
  return <div className="campaigncard-wrapper">
      <img className="campaigncard-image" src={require("../../assets/swaraj-tiwari-DBX2NGLSgN8-unsplash.jpg")} alt="campaign cover"/>
      <div className="campaigncard-name">
          Campaign 1
      </div>
  </div>;
}
