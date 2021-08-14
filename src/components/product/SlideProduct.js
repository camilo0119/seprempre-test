import React, { useState } from "react";
import { productInfo } from "../../assets/fake/productInfo";

const SlideProduct = () => {

  const [productData, ] = useState(productInfo);
  const [pictureSelected, setPictureSelected] = useState(productData.images[0]);

  const handleImageSelected = (img) => {
    setPictureSelected(img);
  };

  return (
    <div>
      <div className="columns is-vcentered slide-product">
        <div className="column content">
          <img src={pictureSelected.url} />
        </div>
      </div>
      <div className="columns is-vcentered is-mobile is-gapless">
        {productData?.images.map((img, key) => (
          <div
            className="column is-4"
            key={key}
            onClick={() => handleImageSelected(img)}
          >
            <div className="slide-product__preview content">
              <img src={img.url} alt={img.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideProduct;
