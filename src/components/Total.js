import "./total.css";
import { useSelector } from "react-redux";

function Total() {
  const cart = useSelector((state) => state.cart);
  const discountApplied = useSelector((state) => state.discount);
  const shippingStore = useSelector((state) => state.shipping);

  const getSubTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const getTotal = (shippingStore, discountApplied) => {
    let totalPrice = 0;
    let shipping = shippingStore ? 10 : 0
    let discount = discountApplied ? 0.75 : 1
    totalPrice = getSubTotal().totalPrice * discount;
    return totalPrice + shipping;
  };

  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          SubTotal ({getSubTotal().totalQuantity} items) :{" "}
          <strong>${getSubTotal().totalPrice}</strong>
        </p>
        {/*
        <p className="total__p">
          Taxes: 
          <strong>${getSubTotal().totalPrice}</strong>
        </p>
          */}
        <p className="total__p">
          Shipping: 
          <strong>{shippingStore ? "$10" : "Not included"  }</strong>
        </p>

        {discountApplied && (
          <>
            <p className="discount__p">Discount Applied 25% OFF</p>         
          </>
        )}
      </div>
      <br/>
        <hr />
        <p className="total__p final">
              Total:
              <strong> ${getTotal(shippingStore, discountApplied) }</strong>
            </p>
    </div>
  );
}

export default Total;
