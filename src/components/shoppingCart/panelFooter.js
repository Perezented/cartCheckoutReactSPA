import { useContext } from "react";
import { Link } from "react-router-dom";
import { SomeContext } from "../../contexts";

export default function PanelFooter() {
  const { cartTotal } = useContext(SomeContext);
  return (
    <div className="panel-footer">
      <div className="row text-center">
        <div className="col-xs-9">
          <h4 className="text-right">
            Total <strong>${cartTotal}</strong>
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
