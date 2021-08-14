import React, { useState } from "react";
import { productInfo } from "../../assets/fake/productInfo";
import { constants } from "../../utils/constants/constants";
import { CardSelect } from "../commons/CardSelect";
import EspecificationsList from "../commons/EspecificationsList";
import Tabs from "../commons/Tabs";

const ProductDetails = () => {
  const [productData, ] = useState(productInfo);

  const tabsContent = Object.keys(productInfo.about).map(key => ({
      title: key,
      content: productData.about[key]
  }))

  return (
    <div>
      <div className="product__tag">
        <p>{productData.label}</p>
      </div>
      <div className="product__title">
        <p>{productData.name}</p>
      </div>
      <div className="product__legend">
        <p>{productData.legend}</p>
      </div>
      <div className="product__price-legend mt-6">
        <p>{constants.product.priceLegend}</p>
      </div>
      <div className="product__price">
        <p>${productData.priceStarting}</p>
      </div>
      <div>
          <Tabs tabsList={tabsContent}/>
      </div>
      <div className="mt-5">
        <p className="product__feature_title">{constants.product.colorChoose}</p>
        <CardSelect options={productData.colors}/>
      </div>
      <div className="mt-6">
        <p className="product__feature_title">{constants.product.warrantyCoverage}</p>
        <CardSelect options={productData.coverage} orientation={'horizontal'}/>
      </div>
      <div className="mt-6">
        <p className="product__feature_title">{constants.product.specifications}</p>
        <EspecificationsList dataList={productData.specifications}/>
      </div>
      <div className="footer__spacing"></div>
    </div>
  );
};

export default ProductDetails;
