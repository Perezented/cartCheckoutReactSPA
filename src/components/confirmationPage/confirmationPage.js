import { useContext } from "react";
import { SomeContext } from "../../contexts";
export default function ConfirmationPage() {
  const { addressInfo, cart } = useContext(SomeContext);

  // gets the date 5 days later to spoof a deliver date
  let fiveDaysLater = new Date();
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);
  return (
    <section className="text-center">
      <h1>Order Confirmed</h1>
      <div>
        {" "}
        <p>
          Thank you for your order,{" "}
          {addressInfo.firstName + " " + addressInfo.lastName}
        </p>
        <p>Order Number: {Math.floor(Math.random() * 1000000)}</p>
      </div>
      <div>
        <p>
          Order information and confirmation will be sent to {addressInfo.email}
        </p>
      </div>
      <div>
        <h2>Shipping to address: </h2>
        <div>
          {`${addressInfo.firstName} ${addressInfo.lastName}`}
          <p>{addressInfo.address}</p>
          <p>{addressInfo.address2}</p>
          <p>{`${addressInfo.state} ${addressInfo.country} ${addressInfo.zip}`}</p>
        </div>
        <div>
          <p>Standard delivery, 4-7 days estimated</p>
        </div>
      </div>
      <div>These item(s) will arrive in {fiveDaysLater.toDateString()}</div>
      <div>
        {cart.map((itemsOrdered) => {
          console.log(itemsOrdered);
          return (
            <p>
              `{itemsOrdered.quantity} of {itemsOrdered.productName} at{" "}
              {itemsOrdered.productPrice}`
            </p>
          );
        })}
      </div>
      <div>Total: $ {cart.total}</div>
    </section>
  );
}
