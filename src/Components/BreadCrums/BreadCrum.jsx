import "./breadCrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";

const BreadCrum = ({ product }) => {
  return (
    <div className="breadCrum">
      HOME <img src={arrowIcon} /> SHOP <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} /> {product.name}
    </div>
  );
};

export default BreadCrum;
