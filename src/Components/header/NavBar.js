import { Fragment } from "react/cjs/react.production.min";
import classes from "./NavBar.module.css";
import mainImg from "../../assets/meals.jpg";

function NavBar() {
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>React Meals</h2>
        <button className={classes.button}>
          <span> Your Cart </span>
          <span className={classes.badge}>{1}</span>
        </button>
      </div>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default NavBar;
