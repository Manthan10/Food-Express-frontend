import { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = (props) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="card-image"
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">{props.foodDes}</p>
          <div className="container w-100">
            <select
              className="m-2 h-100  bg-dark text-light rounded p-1"
              onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-100 bg-dark rounded text-light p-1"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((currelm, index) => {
                <option key={index} value={currelm}>
                  {currelm}
                </option>;
              })}
            </select>

            <div className="d-inline h-100 fs-5">Rs.{finalPrice}/-</div>
          </div>
          <hr />
          <button
            className="btn btn-dark justify-center ms-2"
            onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
