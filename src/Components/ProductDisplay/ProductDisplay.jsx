import "./productDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDull from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplayLeft">
        <div className="productDisplayImgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplayImg">
          <img src={product.image} className="productDisplayMainImg" />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className="produtDisplayStar">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplayPrices">
          <div className="productDisplayPriceOld"> ₾{product.old_price} </div>
          <div className="productDisplayPriceNew"> ₾{product.new_price} </div>
        </div>
        <div className="productDisplayDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
          inventore consequatur, suscipit beatae veniam.
        </div>
        <div className="productDisplaySize">
          <h1>Select size </h1>
          <div className="productDisplaySizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={() => addToCart(product.id)}> ADD TO CART </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
