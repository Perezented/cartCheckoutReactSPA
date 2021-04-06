import PanelFooter from "./panelFooter";
import PanelBody from "./panelBody";
import PanelHeading from "./panelHeading";

export default function ShoppingCart(cartInfo) {
  const cart = cartInfo.cartInfo.cart;
  const removeItem = cartInfo.cartInfo.removeItem;
  const calculateTotal = cartInfo.cartInfo.calculateTotal;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="panel panel-info">
            <PanelHeading />
            <PanelBody
              cartInfo={{ cart, removeItem, calculateTotal }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
