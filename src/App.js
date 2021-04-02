import { useState } from "react";
import "./App.css";
import AddressForm from "./components/addressForm/addressForm";
import PaymentInterface from "./components/paymentInterface/paymentInterface";
import ShoppingCart from "./components/shoppingCart/shoppingCart";

function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        <PaymentInterface />
        <ShoppingCart />
        <AddressForm addressInfo={{ addressInfo, setAddressInfo }} />
      </header>
    </div>
  );
}

export default App;
