import React from "react";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";
import CheckOutForm from "./Components/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/cart/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);

const Payment = () => {
  const [cartItem] = useCart();

  const totalPrice = cartItem.reduce((sum, item) => item.price + sum, 0);
  const total = parseInt(totalPrice.toFixed(2));

  return (
    <div className="my-5 md:my-10">
      <SectionTitle subHeading="Please procced to" heading="Your paymet" />
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cartItem} price={total} />
      </Elements>
    </div>
  );
};

export default Payment;
