import fillerImg from "../../imgs/SomeFiller.png";
import Counter from "./counter";

export default function repeatableCartItem(
  value,
  index,
  removeItemFunction,
  cartLength
) {
  // Just a template for cart items to be displayed in the cart bars
  return (
    <div key={index}>
      <div className="row">
        <div className="col-xs-2">
          <img className="img-responsive" src={fillerImg} alt="some filler" />
        </div>
        <div className="col-xs-4">
          <h4 className="product-name">
            <strong>{value.productName}</strong>
          </h4>
          <h4>
            <small>{value.productDescription}</small>
          </h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-6 text-right">
            <h6>
              <strong>
                {value.productPrice} <span className="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div className="col-xs-4">
            <Counter props={{ value, cartLength }} />
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-link btn-xs"
              onClick={() => {
                removeItemFunction(value);
              }}
            >
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
