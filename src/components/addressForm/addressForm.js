export default function AddressForm(props) {
  const handleChanges = (e) => {
    const updatedAddress = {
      ...props.addressInfo["addressInfo"],
      [e.target.id]: e.target.value
    };
    return props.addressInfo["setAddressInfo"](updatedAddress);
  };
  return (
    <div className="container">
      <div className="col-md-9 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                onChange={handleChanges}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChanges}
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={handleChanges}
                required
              />
              <div className="invalid-feedback" style={{ width: "100%" }}>
                Your username is required.
              </div>
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
              placeholder="you@example.com"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address2">
              Address 2 <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment or suite"
              onChange={handleChanges}
            />
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label htmlFor="country">Country</label>
              <select
                className="custom-select d-block w-100"
                id="country"
                required
                onChange={handleChanges}
              >
                <option>Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="state">State</label>
              <select
                className="custom-select d-block w-100"
                id="state"
                required
                onChange={handleChanges}
              >
                <option>Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                required
                onChange={handleChanges}
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="same-address"
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
              onChange={handleChanges}
            />
            <label
              className="custom-control-label"
              id="save-info"
              onChange={handleChanges}
            >
              Save this information for next time
            </label>
          </div>
          <hr className="mb-4" />
        </form>
      </div>
    </div>
  );
}
