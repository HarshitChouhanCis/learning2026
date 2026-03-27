import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./stripe.js";
import CheckoutForm from "./CheckoutForm.jsx";


function Strinpe() {
  return (
    <div>
      <Elements stripe={stripePromise}>
      <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Strinpe
