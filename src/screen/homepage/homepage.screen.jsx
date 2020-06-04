import React, { Component } from "react";
import { connect } from "react-redux";

import SubNavBar from "../../components/subNavBar/subnavbar.component";

import MainPage from "./mainPage/mainpage.screen";
import WhatsNewScreen from "./whatsnew/whatsnew.screen";

class HomePage extends Component {
  renderTab = () => {
    switch (this.props.subNav.tab) {
      case 0:
        return <WhatsNewScreen />;

      default:
        return <MainPage />;
    }
  };

  render() {
    return (
      <div>
        <SubNavBar />
        {this.renderTab()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subNav: state.subNav,
});

export default connect(mapStateToProps)(HomePage);
