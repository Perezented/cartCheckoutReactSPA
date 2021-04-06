import { useState } from "react";

function Counter(cart) {
  let [counter, setCounter] = useState(cart.props.quantity);

  // const thatCartItem = props.cart.dict[props.foodItem.menuItemID];
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
        cart.props.newerQuantity = event.target.value;
      }}
    ></input>
  );
}

export default Counter;
