import { Link } from "react-router-dom";

export default function PanelFooter(cart) {
  const actualCart = cart.cart;
  actualCart.total = 0;
  actualCart.map((cartItem) => {
    const productPrice = cartItem.productPrice;
    const quantity = cartItem.quantity;
    actualCart.total += productPrice * quantity;
  });
  return (
    <div className="panel-footer">
      <div className="row text-center">
        <div className="col-xs-9">
          <h4 className="text-right">
            Total <strong>${actualCart.total}</strong>
          </h4>
        </div>
        <div className="col-xs-3">
          <Link to="/checkout">
            <button type="button" className="btn btn-success btn-block">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
