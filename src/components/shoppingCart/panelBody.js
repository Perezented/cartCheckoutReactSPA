import repeatableCartItem from "./repeatableCartItem";
import UpdateTotalBar from "./updateTotalBar";

export default function PanelBody(props) {
  const cart = props["cartInfo"].cart;
  const removeItem = props["cartInfo"].removeItem;
  const calculateTotal = props["cartInfo"].calculateTotal;
  const setCartTotal = props["cartInfo"].setCartTotal;

  if (cart.length === 0) {
    return null;
  }
  if (cart.length !== 0) {
    return (
      <>
        <hr />
        {cart.length !== 0 &&
          cart.map((value, index) => {
            return repeatableCartItem(value, index, removeItem);
          })}
        <UpdateTotalBar props={{ cart, calculateTotal, setCartTotal }} />
      </>
    );
  }
}
