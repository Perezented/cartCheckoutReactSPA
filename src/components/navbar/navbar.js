export default function Navbar() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/checkout">
              Checkout
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
