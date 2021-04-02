import "./App.css";
import PaymentInterface from "./components/paymentInterface/paymentInterface";
import ShoppingCart from "./components/shoppingCart/shoppingCart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PaymentInterface />
        <ShoppingCart />
      </header>
    </div>
  );
}

export default App;
