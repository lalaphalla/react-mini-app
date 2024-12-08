import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { productAction } from "../../store/product";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const increaseHandle = () => {
    dispatch(productAction.increase(id));
    console.log(id);
  };
  const decreaseHandle = () => {
    dispatch(productAction.decrease(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandle}>-</button>
          <button onClick={increaseHandle}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
