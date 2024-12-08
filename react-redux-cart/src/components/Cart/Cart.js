import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const products = useSelector((state) => state.product);
  console.log(products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((product, index) => (
          <li>
            <CartItem key={index} 
              item={{ title: product.name, quantity: product.qty, total: product.qty * product.price, price: product.price, id: index}}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
