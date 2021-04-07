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
  const [cartTotal, setCartTotal] = useState(cart.total);
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
  function calculateTotal(cart) {
    cart.total = 0;
    cart.forEach((cartItem) => {
      const productPrice = cartItem.productPrice;
      const quantity = cartItem.quantity;
      cart.total += productPrice * quantity;
    });
    return cart.total;
  }
  function removeItem(item) {
    const newCart = cart.filter((cartItem) => {
      return cartItem.productItemID !== item.productItemID;
    });
    setCart(newCart);
  }

  function submitInfo(e) {
    console.log(addressInfo, cardInfo, cart); // Would connect to db here
    // setAddressInfo(initialAddressInfo);
    // setCardInfo(initialCardInfo);
  }
  if (cart.total === undefined) {
    calculateTotal(cart);
    setCartTotal(cart.total);
  }
  useEffect(() => {
    // Start of 'adding' items to cart
    const cartItem0 = products.Products.product0;
    const cartItem1 = products.Products.product1;
    const cartItem2 = products.Products.product2;
    // have some sort of quantity to display for each product
    cartItem0.quantity = 1;
    cartItem1.quantity = 2;
    cartItem2.quantity = 3;
    setCart([cartItem0, cartItem1, cartItem2]);
  }, []);
  useEffect(() => {
    calculateTotal(cart);
    setCartTotal(cart.total);
  }, [cart]);

  return (
    <div className="App">
      <header className="App-header">
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
