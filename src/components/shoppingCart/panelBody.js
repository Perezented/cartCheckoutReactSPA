import { useContext } from "react";
import { SomeContext } from "../../contexts";
import repeatableCartItem from "./repeatableCartItem";
import UpdateTotalBar from "./updateTotalBar";

export default function PanelBody() {
  const { cart, removeItem, calculateTotal, setCartTotal } = useContext(
    SomeContext
  );
  const cartLength = cart.length;

  if (cart.length === 0) {
    setCartTotal(0);
    return null;
  }
  if (cart.length !== 0) {
    calculateTotal(cart);
    return (
      <>
        <hr />
        {cart.length !== 0 &&
          cart.map((value, index) => {
            return repeatableCartItem(value, index, removeItem, cartLength);
          })}
        <UpdateTotalBar cart={cart} />
      </>
    );
  }
}
