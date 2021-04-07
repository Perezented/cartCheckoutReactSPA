import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/checkout">
              Checkout
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
