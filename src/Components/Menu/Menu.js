import classes from "./Menu.module.css";
import MenuList from "./MenuList";
import Card from "../UI/Card";

const data = [
  { id: "1", title: "Sushi", discrip: " First Try", price: "$20.3" },
  {
    id: "2",
    title: "Barbecue Burger",
    discrip: "Delicious and meaty",
    price: "$16.50",
  },
  {
    id: "3",
    title: "Green Bowl",
    discrip: "Healthy and Green",
    price: "$12.99",
  },
  {
    id: "4",
    title: "Club Sandwitch",
    discrip: "im loving it",
    price: "$18.99",
  },
];

const menuItems = data.map((data) => (
  <MenuList
    key={data.id}
    id={data.id}
    title={data.title}
    discrip={data.discrip}
    price={data.price}
  />
));

function Menu(props) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{menuItems}</ul>
      </Card>
    </section>
  );
}

export default Menu;
