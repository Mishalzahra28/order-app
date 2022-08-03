// import { useState } from "react";
import classes from "./MenuList.module.css";
import MenuItemForm from "./MenuItemForm";
import { useContext } from "react";
import cartContext from "../store/cart-context";

function MenuList(props) {
  // const [amount, setAmount] = useState("");
  const cartctx=useContext(cartContext);
  function addToCart(amount) {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
  })

    console.log(amount);
  }

  return (
    <div className={classes.container}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.discrip}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <MenuItemForm addToCart={addToCart} />
    </div>
  );
}

export default MenuList;
