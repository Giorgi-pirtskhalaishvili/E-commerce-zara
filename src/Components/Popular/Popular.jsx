import "./popular.css";
import productData from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1> POPULAR IN WOMEN </h1>
      <hr className="underLine" />
      <div className="popularItem">
        {productData.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            newPrice={product.new_price}
            oldPrice={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
