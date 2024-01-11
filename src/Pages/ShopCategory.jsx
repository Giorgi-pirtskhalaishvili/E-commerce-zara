import { useContext } from "react";
import "./styles/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropDonwIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shopCategory">
      <img
        src={banner}
        alt="Shop Category Banner"
        className="ShopCategoryBanner"
      />
      <div className="shopCategoryIndexSort">
        <p>
          Showing 1-12 <span> Out from 36 </span>
        </p>
        <div className="shopCategorySort">
          Sort by
          <img src={dropDonwIcon} alt="Drop down icon" />
        </div>
      </div>
      <div className="shopCategoryProducts">
        {allProducts.map((product) => {
          if (category === product.category) {
            return (
              <Item
                className="item"
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                newPrice={product.new_price}
                oldPrice={product.old_price}
              />
            );
          }
        })}
      </div>
      <div className="shopCategoryLoadMore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
