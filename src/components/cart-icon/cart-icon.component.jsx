import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles.jsx";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());
  return (
    <CartContainer onClick={toggleCartHiddenClickHandler}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};
export default CartIcon;
