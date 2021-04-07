import { useContext, useState, useEffect } from "react";
import { SomeContext } from "../../contexts";
import PaymentInterface from "./paymentInterface";
import * as yup from "yup";
import addressFormSchema from "./addressFormSchema";
import ValidateButtons from "./validateButtons";
import { Link } from "react-router-dom";
export default function AddressForm() {
  const { addressInfo, setAddressInfo, disabled, setDisabled } = useContext(
    SomeContext
  );
  const initialErrors = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    address: "",
    country: "",
    state: "",
    zip: ""
  };
  let [errors, setErrors] = useState(initialErrors);
  let [formData, setFormData] = useState(addressInfo);

  const handleChanges = (e) => {
    const element = e.target;

    setFormData({ ...formData, [element.name]: element.value });

    yup
      .reach(addressFormSchema, element.name)
      .validate({ ...formData, [element.name]: element.value }[element.name])
      .then((valid) => {
        setErrors({ ...errors, [element.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [element.name]: err.errors[0] });
      });
  };
  useEffect(() => {
    // Checks address form to be all filled out to allow the pay button to show up
    addressFormSchema.isValid(formData).then((valid) => {
      if (valid) {
        setAddressInfo(formData);
        setDisabled(false);
        setErrors(initialErrors);
      } else {
        setDisabled(true);
      }
    });
  }, [formData]);

  return (
    <div className="container">
      <div className="col-md-9 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handleChanges}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChanges}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <div className="input-group username">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleChanges}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChanges}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="1234 Main St"
              required
              onChange={handleChanges}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address2">
              Address 2 <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              placeholder="Apartment or suite"
              onChange={handleChanges}
            />
          </div>
          <div className="row stateNcountry">
            <div className="col-md-5 mb-3">
              <label htmlFor="country">Country</label>
              <select
                className="custom-select d-block w-100"
                id="country"
                name="country"
                required
                onChange={handleChanges}
              >
                <option disabled selected defaultValue>
                  Choose...
                </option>
                <option>United States</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <select
                className="custom-select d-block w-100"
                id="state"
                name="state"
                required
                onChange={handleChanges}
              >
                <option disabled selected defaultValue>
                  Choose...
                </option>
                <option>California</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                placeholder=""
                required
                maxLength="5"
                onChange={handleChanges}
              />
            </div>
          </div>
          <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="same-address"
              name="same-address"
              onChange={handleChanges}
            />
            <label className="custom-control-label" htmlFor="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="save-info"
              name="save-info"
              onChange={handleChanges}
            />
            <label
              className="custom-control-label"
              id="save-info"
              name="save-info"
              onChange={handleChanges}
            >
              Save this information for next time
            </label>
          </div>
          <hr className="mb-4" />
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

          {!disabled && (
            <Link to="/payment">
              <button className="btn btn-success btn-block">
                Continue to Payment
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}
