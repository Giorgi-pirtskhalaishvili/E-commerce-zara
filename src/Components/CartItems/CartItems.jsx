import { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { allProducts, cartItem, removeFromCart, getTotalCartAmout } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItemsFormatMain ">
        <p>Products</p>
        <p>Title </p>
        <p>Price</p>
        <p>Count</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((each) => {
        if (cartItem[each.id] > 0) {
          return (
            <div>
              <div className="cartItemsFormated cartItemsFormatMain">
                <img src={each.image} alt="" className="cartIconProductIcon" />
                <p>{each.name}</p>
                <p> ₾{each.new_price}</p>
                <button className="cartItemsQuantity">
                  {cartItem[each.id]}{" "}
                </button>
                <p className="totalValue">
                  ₾ {each.new_price * cartItem[each.id]}
                </p>
                <img
                  className="removeIcon"
                  src={removeIcon}
                  alt=""
                  onClick={() => removeFromCart(each.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartItemsDown">
        <div className="carttItemsTotal">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItemsTotalItem">
              <p>Subtotal</p>
              <p>${getTotalCartAmout()}</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItemsTotalItem">
              <h3>Total</h3>
              <h3>${getTotalCartAmout()}</h3>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
