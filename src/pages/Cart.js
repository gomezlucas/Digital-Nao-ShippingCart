import './cart.css'
import Total from '../components/Total'
import Discount from '../components/Discount'
import Shipping from '../components/Shipping'
import CartItem from '../components/CartItem'

import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total/>
        <Discount />
         <Shipping/>
      </div>

    </div>
  )
}

export default Cart