import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const itemsInCart = useSelector(state => state.cart.items)
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          itemsInCart.map(itemInCart => 
            <CartItem
              key={itemInCart.id}
              item={{ 
                      id: itemInCart.id,
                      title: itemInCart.name, 
                      quantity: itemInCart.quantity, 
                      total: itemInCart.totalPrice, 
                      price: itemInCart.price 
                    }}
            />
          )
        }
      </ul>
    </Card>
  );
};

export default Cart;
