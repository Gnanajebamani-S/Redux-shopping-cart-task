import Item from "./Item";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.products);
  const quantities = useSelector((state) => state.quantity);

  // Calculate the total price of products in the cart
  const totalPrice = Object.keys(quantities).reduce((total, productId) => {
    const product = products.find((prod) => prod.id === parseInt(productId));
    const qty = quantities[productId];

    return total + product.price * qty;
  }, 0);

  // Calculate the discount based on the total price (fixed discount percentage of 8%).
  const discount = Math.round(totalPrice * 0.08);

  const checkOut = () => {
    if (totalPrice == 0) {
      alert("Your cart is Empty");
    } else {
      alert("Thankyou for Shopping");
    }
  };
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-11 bg-white text-center ms-2 mt-3 mb-3 pt-2 pb-2 rounded shadow-lg ">
          <h1>Your Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 ms-2 me- col-sm-12  bg-white text-center rounded shadow-lg">
          <div>
            <table className="table table-sm mt-3 table-borderless align-middle ">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const qty = quantities[product.id];
                  return <Item key={product.id} product={product} qty={qty} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="col-md-4  ms-1 bg-white  border rounded   pt-3 justify-content-center"
          style={{ height: 300 }}
        >
          <div className="d-flex justify-content-between">
            <h6>Subtotal</h6>
            <h6>&#8377;{totalPrice}.00</h6>
          </div>

          <div className="d-flex justify-content-between">
            <h6>Shipping Fee (std.)</h6>
            <h6>Free</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Discount (8% )</h6>
            <h6>-&#8377; {discount}.00 </h6>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <h4>Total Amount </h4>
              <h4>&#8377;{totalPrice - discount}.00 </h4>
            </div>

            <button
              className="btn btn-warning mt-2 opacity-80"
              onClick={checkOut}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
