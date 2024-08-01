"use client";
import "./discount.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setDiscountToTrue } from "../redux/cartSlice";

function Discount() {
  const [discountCode, setDiscountCode] = useState("");
  const discountSaved = useSelector((state) => state.discount);
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (discountCode !== "PROMOWEEKEND") {
      const errorElement = document.querySelector(".msg-error");
      errorElement.classList.add("show-error");
      setTimeout(() => {
        errorElement.classList.remove("show-error");
      }, 2000);
    } else {
      setDiscountCode("");
      const successElement = document.querySelector(".msg-success");
      successElement.classList.add("show-success");
      dispatch(setDiscountToTrue());
      setTimeout(() => {
        successElement.classList.remove("show-success");
      }, 2000);
    }
  };
  return (
    !discountSaved && (
      <div className="discount">
        <h2>Enter the discount code</h2>
        <div className="input-wrapper">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={discountCode}
              onChange={handleChange}
              placeholder="Enter the discount code"
            />
            <p className="msg-error"> The code is invalid. </p>
            <p className="msg-success "> Discount applied. </p>

            <button>Send</button>
          </form>
        </div>
      </div>
    )
  );
}

export default Discount;
