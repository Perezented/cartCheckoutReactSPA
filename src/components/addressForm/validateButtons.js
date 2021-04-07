import { useContext } from "react";
import { SomeContext } from "../../contexts";
import { Link } from "react-router-dom";
export default function ValidateButtons(props) {
  const { cartTotal, submitInfo } = useContext(SomeContext);
  if (props.disabled) {
    return (
      <>
        <ul className="nav nav-pills nav-stacked">
          <li className="active">
            <Link to="#">
              <span className="badge pull-right">
                <span className="glyphicon glyphicon-usd"></span>
                {cartTotal}
              </span>{" "}
              Final Payment
            </Link>
          </li>
        </ul>
        <br />
        <button
          className="btn btn-secondary btn-lg btn-block"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Please complete the required inputs above
        </button>
      </>
    );
  } else {
    return (
      <>
        <ul className="nav nav-pills nav-stacked">
          <li className="active">
            <Link to="/confirmation" onClick={(e) => submitInfo(e)}>
              <span className="badge pull-right">
                <span className="glyphicon glyphicon-usd"></span>
                {cartTotal}
              </span>{" "}
              Final Payment
            </Link>
          </li>
        </ul>
        <br />
        <Link to="/confirmation">
          <button
            onClick={(e) => submitInfo(e)}
            className="btn btn-success btn-lg btn-block"
            type="submit"
            value="Pay"
          >
            Pay
          </button>
        </Link>
      </>
    );
  }
}
