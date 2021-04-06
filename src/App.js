import { useState } from "react";
import "./App.css";
import AddressForm from "./components/addressForm/addressForm";
import PaymentInterface from "./components/paymentInterface/paymentInterface";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import products from "./config/config.json";
import ConfirmationPage from "./components/confirmationPage/confirmationPage";
import { SomeContext } from "./contexts";

function App() {
  // Start of 'adding' items to cart
  const cartItem0 = products.Products.product0;
  const cartItem1 = products.Products.product1;
  const cartItem2 = products.Products.product2;
  // have some sort of quantity to display for each product
  cartItem0.quantity = 1;
  cartItem1.quantity = 2;
  cartItem2.quantity = 3;
  // cart state set to the mock items
  const [cart, setCart] = useState([cartItem0, cartItem1, cartItem2]);
  const [cartTotal, setCartTotal] = useState(cart.total);
  // cardInfo
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expityMonth: "",
    expityYear: "",
    cvCode: "",
    remember: ""
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

  function submitInfo() {
    console.log(addressInfo, cardInfo, cart); // Would connect to db here
  }
  if (cart.total === undefined) {
    calculateTotal(cart);
    setCartTotal(cart.total);
  }
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
            submitInfo
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
                <PaymentInterface />
              </Route>
            </Switch>
          </Router>
        </SomeContext.Provider>
      </header>
    </div>
  );
}

export default App;
