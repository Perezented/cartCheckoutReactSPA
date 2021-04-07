import { useContext, useState, useEffect } from "react";
import { SomeContext } from "../../contexts";
import * as yup from "yup";
import paymentFormSchema from "./paymentFormSchema";

export default function PaymentInterface(props) {
  const { cardInfo, setCardInfo } = useContext(SomeContext);
  const setPaymentDisabled = props.disabled.setPaymentDisabled;
  const paymentDisabled = props.disabled.paymentDisabled;
  const initialErrors = {
    cardNumber: "",
    expityMonth: "",
    expityYear: "",
    cvCode: "",
    remember: ""
  };
  let [errors, setErrors] = useState(initialErrors);
  let [formData, setFormData] = useState(cardInfo);

  const handleChanges = (e) => {
    const element = e.target;

    setFormData({ ...formData, [element.name]: element.value });

    yup
      .reach(paymentFormSchema, element.name)
      .validate({ ...formData, [element.name]: element.value }[element.name])
      .then((valid) => {
        setErrors({ ...errors, [element.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [element.name]: err.errors[0] });
      });
  };
  useEffect(() => {
    // Checks address form to be all fileed out to allow the pay button to show up
    paymentFormSchema.isValid(formData).then((valid) => {
      if (valid) {
        setCardInfo(formData);
        setPaymentDisabled(false);
        setErrors(initialErrors);
      } else {
        setPaymentDisabled(true);
      }
    });
  }, [formData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-9 cctaker">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Payment Details</h3>
              <div className="checkbox pull-right">
                <label>
                  <input
                    onChange={handleChanges}
                    id="remember"
                    name="remember"
                    type="checkbox"
                  />
                  Remember
                </label>
              </div>
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <div className="input-group">
                  <input
                    onChange={handleChanges}
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9876 5432"
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
                        name="expityMonth"
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
                        name="expityYear"
                        placeholder="YYYY"
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
                      name="cvCode"
                      placeholder="123"
                      required
                      autoComplete="false"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(errors).map((item, key) => {
        if (errors[item]) {
          return (
            <div className="row" key={key}>
              <div className="col">
                <p style={{ color: "red" }}>{errors[item]}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
