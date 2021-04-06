import { useState } from "react";

function Counter(cart) {
  let [counter, setCounter] = useState(cart.props.value.quantity);
  const [itemCount, setitemCount] = useState(cart.props.cartLength);

  if (itemCount !== cart.props.cartLength) {
    setitemCount(cart.props.cartLength);
    setCounter(cart.props.value.quantity);
  }
  return (
    <input
      type="number"
      min="0"
      max="100"
      step="1"
      id="counter"
      className="form-control input-sm"
      value={counter}
      onChange={(event) => {
        setCounter(Math.floor(event.target.value));
        cart.props.value.newerQuantity = event.target.value;
      }}
    ></input>
  );
}

export default Counter;
