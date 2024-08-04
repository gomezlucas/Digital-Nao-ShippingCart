import "./item.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {  toast } from "react-toastify";

function Item({ id, title, image, price }) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="item" />
      <button
        onClick={() =>{
          toast.success(`El producto fue agregado del  Carrito.`)  
          dispatch(
            addToCart({
              id,
              title,
              image,
              price,
            })
          )
          
        }
        }
      >
        Add to Cart
      </button>
  
    </div>
  );
}

export default Item;
