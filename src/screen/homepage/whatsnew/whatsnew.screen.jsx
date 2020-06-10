import React, { useEffect } from "react";
import { connect } from "react-redux";

import ItemBar from "../../../components/itembar/itembar.component";
import SmallBanner from "../../../components/banner/smallBanner/smallBanner.component";
import BigItem from "../../../components/bigitem/bigitem.component";
import BigBanner from "../../../components/banner/bigBanner/bigbanner.component";

import { getSaleAsync } from "../../../redux/action/sale.action";
import { getCategoryAsync } from "../../../redux/action/category.action";
import { SmallBannerLoading } from "../../../components/loading/loading.component";

function WhatsNew(props) {
  const getSale = props.getSaleAsync;
  const saleInit = props.sale.init;
  const categoryInit = props.category.init;
  const getCategory = props.getCategoryAsync;
  useEffect(() => {
    if (!saleInit) getSale();
    if (!categoryInit) getCategory();
  }, [getSale, saleInit, categoryInit, getCategory]);

  let saleCount = 0;
  let categoryCount = 0;

  const renderSale = () => {
    if (
      !props.sale.saleLoading &&
      props.sale.sales.length > 0 &&
      saleCount < props.sale.sales.length
    ) {
      return (
        <>
          <SmallBanner
            key={props.sale.sales[saleCount]._id}
            title={props.sale.sales[saleCount].name}
            image={props.sale.sales[saleCount].image}
          />{" "}
          <ItemBar products={props.sale.sales[saleCount++].items} />{" "}
        </>
      );
    }
    if (props.sale.saleLoading) return <SmallBannerLoading />;
  };

  const renderCategory = () => {
    let totalCategories = props.category.categories.length;

    let propCategories = props.category.categories;
    if (
      !props.category.categoryLoading &&
      totalCategories > 0 &&
      categoryCount < totalCategories
    ) {
      if (totalCategories - categoryCount >= 2) {
        return (
          <div className="whatsnew-bigitem-wrapper">
            <BigItem
              title={propCategories[categoryCount].name}
              image={propCategories[categoryCount++].image}
            />
            <BigItem
              title={propCategories[categoryCount].name}
              image={propCategories[categoryCount++].image}
            />
          </div>
        );
      } //else return <BigBanner title={propCategories[categoryCount].name} image={propCategories[categoryCount++].image} />
    }
  };

  const renderMain = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push(renderSale());
      data.push(renderCategory());
    }
    return data;
  };

  return (
    <div className="whatsnew-wrapper">
      {renderMain()}

      <BigBanner
        title=" ONE STOP FOR ALL FASHION PROBLEMS"
        image={require("../../../assets/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg")}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  sale: state.sale,
  category: state.category,
});

export default connect(mapStateToProps, { getSaleAsync, getCategoryAsync })(
  WhatsNew
);
