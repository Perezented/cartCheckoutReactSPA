import repeatableCartItem from "./repeatableCartItem";
import TotalBar from "./totalBar";

export default function PanelBody(props) {
  const cart = props["cartInfo"].cart;
  const setCart = props["cartInfo"].setCart;

  if (cart.length === 0) {
    return null;
  }
  if (cart.length !== 0) {
    return (
      <>
        <hr />
        {cart.length !== 0 &&
          cart.map((value, index, array) => {
            console.log(value);
            return repeatableCartItem(value, index);
          })}
        <TotalBar />
      </>
    );
  }
}
