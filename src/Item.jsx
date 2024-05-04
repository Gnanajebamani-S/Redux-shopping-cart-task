import { incrementQty, decrementQty } from "./Reducer/quantity";
import { useDispatch } from "react-redux";

function Item({ product, qty }) {
  const dispatch = useDispatch();

  // Handler function to increment the quantity
  const handleQtyIncremnt = () => {
    dispatch(incrementQty({ productId: product.id }));
  };

  // Handler function to decrement the quantity
  const handleQtyDecremnt = () => {
    dispatch(decrementQty({ productId: product.id }));
  };

  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={product.thumbnail}
          alt=""
          style={{ width: 100 }}
        />
        <h6>{product.title}</h6>
      </td>
      <td>&#8377;{product.price}.00</td>
      <td>
        <div className=" border border-2 rounded">
          <button
            type="button"
            className="border-0  bg-white me-2 fs-3 "
            onClick={handleQtyDecremnt}
          >
            -
          </button>
          {qty}
          <button
            type="button"
            className="border-0  bg-white ms-2  fs-3"
            onClick={handleQtyIncremnt}
          >
            +
          </button>
        </div>
      </td>
      <td>&#8377;{qty * product.price}.00</td>
    </tr>
  );
}

export default Item;
