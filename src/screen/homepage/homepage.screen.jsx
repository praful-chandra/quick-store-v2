import React, { Component } from 'react';

import MainBanner from "../../components/mainBanner/mainBanner.component";

import HomepageContent from "./homepage-content/homepage-content.component";

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage-wrapper" >
                      <MainBanner />
                    <HomepageContent />
            </div>
        )
    }
}
