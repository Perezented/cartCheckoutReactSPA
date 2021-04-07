import { useEffect, useState } from "react";
import "./App.css";
import AddressForm from "./components/addressForm/addressForm";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import products from "./config/config.json";
import ConfirmationPage from "./components/confirmationPage/confirmationPage";
import { SomeContext } from "./contexts";
import PaymentInterface from "./components/addressForm/paymentInterface";
import ValidateButtons from "./components/addressForm/validateButtons";

function App() {
  // cart state set to the mock items
  const [cart, setCart] = useState([]);
  // a cart total for all other totals seen on the screens
  const [cartTotal, setCartTotal] = useState(cart.total);
  // if all fields are not filled out, these do not allow the continue button to be pressed
  let [disabled, setDisabled] = useState(true);
  const [paymentDisabled, setPaymentDisabled] = useState(true);

  // cardInfo
  const initialCardInfo = {
    cardName: "",
    cardNumber: "",
    expityMonth: "",
    expityYear: "",
    cvCode: "",
    remember: ""
  };
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  // Address info for user
  const initialAddressInfo = {
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
  };
  const [addressInfo, setAddressInfo] = useState(initialAddressInfo);
  // calculates the total for the cart and applies a 'total' key to cart
  function calculateTotal(cart) {
    cart.total = 0;
    cart.forEach((cartItem) => {
      const productPrice = cartItem.productPrice;
      const quantity = cartItem.quantity;
      cart.total += productPrice * quantity;
    });
    return cart.total;
  }
  // Used for removing items out of the cart
  function removeItem(item) {
    const newCart = cart.filter((cartItem) => {
      return cartItem.productItemID !== item.productItemID;
    });
    setCart(newCart);
  }

  // A funtion that would reset the states and connect to the back end servers
  function submitInfo(e) {
    console.log(addressInfo, cardInfo, cart); // Would connect to db here
    // setAddressInfo(initialAddressInfo);
    // setCardInfo(initialCardInfo);
  }

  // When the page loads, the total needs to be set
  if (cart.total === undefined) {
    calculateTotal(cart);
    setCartTotal(cart.total);
  }

  // Start of 'adding' items to cart
  useEffect(() => {
    const cartItem0 = products.Products.product0;
    const cartItem1 = products.Products.product1;
    const cartItem2 = products.Products.product2;
    // have some sort of quantity to display for each product
    cartItem0.quantity = 1;
    cartItem1.quantity = 2;
    cartItem2.quantity = 3;
    setCart([cartItem0, cartItem1, cartItem2]);
  }, []);

  // Anytime the cart changes, update the total
  useEffect(() => {
    calculateTotal(cart);
    setCartTotal(cart.total);
  }, [cart]);

  return (
    <div className="App">
      <header className="App-header">
        {/* A context that is too big, should be broken down to more specific contexts */}
        <SomeContext.Provider
          value={{
            cart,
            removeItem,
            addressInfo,
            setAddressInfo,
            cardInfo,
            setCardInfo,
            cartTotal,
            setCartTotal,
            calculateTotal,
            submitInfo,
            disabled,
            setDisabled,
            paymentDisabled,
            setPaymentDisabled
          }}
        >
          <Router>
            <Switch>
              <Route exact path="/">
                <Navbar />
                <ShoppingCart />
              </Route>
              <Route exact path="/cart">
                <Navbar />
                <ShoppingCart />
              </Route>
              <Route exact path="/confirmation">
                <Navbar />
                <ConfirmationPage />
              </Route>
              <Route exact path="/checkout">
                <Navbar />
                <AddressForm />
              </Route>
              <Route exact path="/payment">
                <Navbar />
                <PaymentInterface />
                <div className="container">
                  <ValidateButtons disabled={disabled || paymentDisabled} />
                </div>
              </Route>
            </Switch>
          </Router>
        </SomeContext.Provider>
      </header>
    </div>
  );
}

export default App;
