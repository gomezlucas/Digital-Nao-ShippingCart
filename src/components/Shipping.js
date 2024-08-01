"use client";
import "./shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleShipping } from "../redux/cartSlice";

function Shipping() {
  const [isShipping, setIsShipping] = useState(false);
   const shippingStore = useSelector((state) => state.shipping);
   const dispatch = useDispatch();

  const handleChange = (event) => {
    setIsShipping(event.target.checked);
    dispatch(handleShipping())
  
  };

useEffect(() => {  
  setIsShipping(shippingStore)
}, [])


  return (
       <div className="shipping">
        <h2>Send to Home? </h2>
        <div className="input-wrapper">
          <form >
            <label> 
            <input
              type="checkbox"
              checked={isShipping}
              onChange={handleChange}
              placeholder="Enter the discount code"
            />
              Check if you want the products delivered ($10)</label>
          </form>
        </div>
      </div>
 
  );
}

export default Shipping;
