import { Link } from "react-router-dom";

export default function PaymentInterface(props) {
  const handleChanges = (e) => {
    e.preventDefault();
    const updatedCardInfo = {
      ...props.cardInfo["cardInfo"],
      [e.target.id]: e.target.value
    };
    return props.cardInfo["setCardInfo"](updatedCardInfo);
  };
  let cartTotal = props.cardInfo.cart.total;

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Payment Details</h3>
              <div className="checkbox pull-right">
                <label>
                  <input onChange={handleChanges} type="checkbox" />
                  Remember
                </label>
              </div>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="cardNumber">CARD NUMBER</label>
                  <div className="input-group">
                    <input
                      onChange={handleChanges}
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      placeholder="Valid Card Number"
                      required
                      maxLength="16"
                    />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-lock"></span>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-7 col-md-7">
                    <div className="form-group">
                      <label htmlFor="expityMonth">EXPIRY DATE</label>
                      <div className="col-xs-6 col-lg-6 pl-ziro">
                        <input
                          onChange={handleChanges}
                          type="number"
                          className="form-control"
                          id="expityMonth"
                          placeholder="MM"
                          required
                          maxLength="2"
                          max="12"
                          min="1"
                        />
                      </div>
                      <div className="col-xs-6 col-lg-6 pl-ziro">
                        <input
                          onChange={handleChanges}
                          type="number"
                          className="form-control"
                          id="expityYear"
                          placeholder="YY"
                          required
                          maxLength="2"
                          max={new Date().getFullYear() + 14}
                          min={new Date().getFullYear()}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-right">
                    <div className="form-group">
                      <label htmlFor="cvCode">CV CODE</label>
                      <input
                        onChange={handleChanges}
                        type="password"
                        className="form-control"
                        id="cvCode"
                        placeholder="CV"
                        required
                        autoComplete="false"
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <a href="#">
                <span className="badge pull-right">
                  <span className="glyphicon glyphicon-usd"></span>
                  {cartTotal}
                </span>{" "}
                Final Payment
              </a>
            </li>
          </ul>
          <br />
          <Link to="/confirmation">
            <button
              onClick={props.cardInfo.submitInfo}
              className="btn btn-success btn-lg btn-block"
              type="submit"
            >
              Pay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
