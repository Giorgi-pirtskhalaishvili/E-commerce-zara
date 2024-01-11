import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../zaraAssets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navLogo">
        <img onClick={() => navigate("/")} src={logo} alt="zara logo" />
      </div>
      <ul className="navMenu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navLoginCart">
        <Link to="/login">
          <button> Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart logo" />
        </Link>

        <div className="navCartCount">{getCartCount()}</div>
      </div>
    </div>
  );
};

export default Navbar;
