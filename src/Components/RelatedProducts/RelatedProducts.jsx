import "./relatedProducts.css";
import products from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedProducs">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProductsItem">
        {products.map((product) => (
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

export default RelatedProducts;
