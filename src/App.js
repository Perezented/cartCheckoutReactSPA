import { useState } from "react";
import "./App.css";
import AddressForm from "./components/addressForm/addressForm";
import PaymentInterface from "./components/paymentInterface/paymentInterface";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import products from "./config/config.json";
import ConfirmationPage from "./components/confirmationPage/confirmationPage";

// dictionary to house current cart and old cart
const dict = {};
const old_cart = {};
function App() {
  // Start of 'adding' items to cart
  const cartItem0 = products.Products.product0;
  const cartItem1 = products.Products.product1;
  // have some sort of quantity to display for each product
  cartItem0.quantity = 1;
  cartItem1.quantity = 2;
  // cart state set to the mock items
  const [cart, setCart] = useState([cartItem0, cartItem1]);
  // cardInfo
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvCode: ""
  });
  // Address info for user
  const [addressInfo, setAddressInfo] = useState({
    address: "",
    address2: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    "same-address": "",
    "save-info": "",
    state: "",
    username: "",
    zip: ""
  });

  function removeItem(item) {
    const newCart = cart.filter((cartItem) => {
      return cartItem.productItemID !== item.productItemID;
    });
    setCart(newCart);
  }

  function submitInfo() {
    console.log(addressInfo, cardInfo, cart);
  }
  function calculateTotal(cart) {
    cart.total = 0;
    cart.forEach((cartItem) => {
      const productPrice = cartItem.productPrice;
      const quantity = cartItem.quantity;
      cart.total += productPrice * quantity;
    });
    return cart.total;
  }
  calculateTotal(cart);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <ShoppingCart
                cartInfo={{
                  cart,
                  removeItem,
                  calculateTotal
                }}
              />
            </Route>
            <Route exact path="/cart">
              <ShoppingCart
                cartInfo={{
                  cart,
                  removeItem,
                  calculateTotal
                }}
              />
            </Route>
            <Route exact path="/confirmation">
              <ConfirmationPage />
            </Route>
            <Route exact path="/checkout">
              <AddressForm addressInfo={{ addressInfo, setAddressInfo }} />
              <PaymentInterface
                cardInfo={{ cardInfo, setCardInfo, submitInfo, cart }}
              />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
