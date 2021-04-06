export default function UpdateTotalBar(props) {
  const cart = props["props"].cart;
  const calculateTotal = props["props"].calculateTotal;
  const setCartTotal = props["props"].setCartTotal;
  return (
    <div className="row">
      <div className="text-center">
        <div className="col-xs-9">
          <h6 className="text-right">Added items?</h6>
        </div>
        <div className="col-xs-3">
          <button
            type="button"
            className="btn btn-default btn-sm btn-block"
            onClick={() => {
              props["props"].cart.forEach((cartItem) => {
                if (cartItem.newerQuantity) {
                  cartItem.quantity = cartItem.newerQuantity;
                }
              });
              calculateTotal(cart);
              setCartTotal(cart.total);
            }}
          >
            Update cart
          </button>
        </div>
      </div>
    </div>
  );
}
