export default function ConfirmationPage(allInfo) {
  const addressInfo = allInfo.allInfo.addressInfo;
  const cardInfo = allInfo.allInfo.cardInfo;
  const cart = allInfo.allInfo.cart;
  console.log(addressInfo, cardInfo, cart);
  return (
    <section className="text-center">
      <h1>Order Confirmed</h1>
      <div>
        {" "}
        <p>Thank you for your order, NAME</p>
        <p>Order Number: IDNUBMER</p>
      </div>
      <div>
        <p>Order information and confirmation will be sent to EMAIL</p>
      </div>
      <div>
        <h2>Shipping to address: </h2>
        <div>
          <p>ADDRESS</p>
        </div>
        <div>
          <p>Standard delivery, 4-7 days Estimated</p>
        </div>
      </div>
      <div>These item(s) will arrive in DATE + 5</div>
      <div>ITEMS</div>
      <div>ORDER TOTAL</div>
    </section>
  );
}
