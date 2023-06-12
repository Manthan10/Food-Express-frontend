import React from "react";
import { useCart, useDispatchCart } from "../Components/ContextReducer";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data?.length === 0) {
    return (
      <>
        <div className="m-5 w-100 text-center fs-3">The Cart Is Empty!</div>
      </>
    );
  }

  let totalPrice = data?.reduce((total, food) => total + food.price, 0);
  return (
    <>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-dark fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {data?.map((food, index) => {
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <DeleteIcon
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>

        <div>
          <button className="btn bs-dark mt-5">Check Out</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
