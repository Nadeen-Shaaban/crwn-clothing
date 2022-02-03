import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="options" to="/shop">
        SHOP
      </Link>
      <Link className="options" to="/signin">
        CONTACT
      </Link>
      <CartIcon />
    </div>
  </div>
);

export default Header;
