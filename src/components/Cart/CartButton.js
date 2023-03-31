import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const noOfItems = useSelector(state => state.cart.totalQuantity)
console.log()
  const toogleCartHandler = (event) => {
    event.preventDefault()
    dispatch(uiActions.toggle())  
  }

  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
