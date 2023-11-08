import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const CheckOutForm = ({ cart, price }) => {
  //   console.log(price);

  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price < 0) {
      return;
    }
    axios
      .post("http://localhost:7000/create-payment-intent", { price })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // console.log("cart", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //   console.log("[error]", error);
      setCardError(error?.message);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      //   console.log(confirmError);
      setCardError(confirmError);
    }
    // console.log(paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent?.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent?.id,
        price,
        date: new Date(),
        status: "service panging",
        CartItems: cart.map((item) => item?.id),
        itemName: cart.map((item) => item?.name),
        quantity: cart?.length,
      };
      axios.post("http://localhost:7000/payment", payment).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-warning md:mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 text-center">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600 text-center lg:mt-5">
          Payment Successful, Transaction ID: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
