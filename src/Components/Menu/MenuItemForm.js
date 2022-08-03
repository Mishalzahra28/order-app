import { useState } from "react";
import classes from "./MenuItemForm.module.css";

function MenuItemForm(props) {
  const [amount, setAmount] = useState(1);

  function amountHandler(e) {
    setAmount(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.addToCart(amount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p className={classes.title}>Amount</p>
      <input
        type="number"
        min="1"
        max="5"
        step="1"
        className={classes.input}
        value={amount}
        onChange={amountHandler}
      />
      <button className={classes.addBtn}>+ Add</button>
    </form>
  );
}
export default MenuItemForm;
