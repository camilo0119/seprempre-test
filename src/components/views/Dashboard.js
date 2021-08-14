import React from "react";
import NavBar from "../commons/NavBar";
import ProductDetails from "../product/ProductDetails";
import SlideProduct from "../product/SlideProduct";
import { productInfo } from "../../assets/fake/productInfo";
import FeaturedIcon from "../commons/FeaturedIcon";

const Dashboard = () => {
  console.log(productInfo);

  return (
    <div>
      <div className="container">
        <NavBar />
        <div className="columns">
          <div className="column">
            <SlideProduct />
            <div className="columns mt-5">
              {productInfo.specificationsFeatured.map((icon, key) => (
                <div className="column is-center">
                  <FeaturedIcon data={icon} key={key} />
                </div>
              ))}
            </div>
          </div>
          <div className="column">
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
