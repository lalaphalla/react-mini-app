import classes from './CartButton.module.css';
import {cartAction} from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartCount = useSelector(state => state.product);
  console.log(cartCount);
  const toggleCartHandler = ()=>{
   dispatch(cartAction.toggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount.length}</span>
    </button>
  );
};

export default CartButton;
