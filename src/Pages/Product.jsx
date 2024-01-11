import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrums/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const specificProduct = allProducts.find(
    (product) => product.id === Number(productId)
  );
  return (
    <div>
      <BreadCrum product={specificProduct} />
      <ProductDisplay product={specificProduct} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
