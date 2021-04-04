import { useState } from "react";
import "./App.css";
import AddressForm from "./components/addressForm/addressForm";
import PaymentInterface from "./components/paymentInterface/paymentInterface";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ConfirmationPage from "./components/confirmationPage/confirmationPage";

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvCode: ""
  });
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

  function submitInfo() {
    console.log(addressInfo, cardInfo);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <ShoppingCart />
            </Route>
            <Route exact path="/cart">
              <ShoppingCart />
            </Route>
            <Route exact path="/confirmation">
              <ConfirmationPage />
            </Route>
            <Route exact path="/checkout">
              <AddressForm addressInfo={{ addressInfo, setAddressInfo }} />
              <PaymentInterface
                cardInfo={{ cardInfo, setCardInfo, submitInfo }}
              />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
