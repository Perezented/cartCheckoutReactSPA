import PanelFooter from "./panelFooter";
import PanelBody from "./panelBody";
import PanelHeading from "./panelHeading";

export default function ShoppingCart(cartInfo) {
  const cart = cartInfo.cartInfo.cart;
  const setCart = cartInfo.cartInfo.setCart;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="panel panel-info">
            <PanelHeading />
            <PanelBody cartInfo={{ cart, setCart }} />
            <PanelFooter cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
}
