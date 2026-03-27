// import React from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const CheckoutForm = () => {

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 1️⃣ Create payment intent from backend
//     const res = await fetch("http://localhost:5000/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: 500 }) // ₹500
//     });

//     const data = await res.json();

//     // 2️⃣ Confirm card payment
//     const result = await stripe.confirmCardPayment(data.clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement)
//       }
//     });

//     if (result.error) {
//       alert(result.error.message);
//     } else {
//       alert("Payment Successful 🎉");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit">Pay</button>
//     </form>
//   );
// };

// export default CheckoutForm;
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#a0aec0"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 })
    });

    const data = await res.json();
    console.log('data: ', data);

  //   const result = await stripe.confirmCardPayment(data.clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement)
  //     }
  //   });

  //   // console.log('result: ', result);
  //   if (result.error) {
  //     alert(result.error.message);
  //   } else {
  //     alert("Payment Successful 🎉");
  //   }
  // };
const result = await stripe.confirmCardPayment(data.clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement)
  }
});

if (result.error) {
  alert(result.error.message);
} else {

  console.log("Payment Intent ID:", result.paymentIntent.id);
// pi_3T2CV7JAy6jp7qyx0MfsERyy
  // Send to backend / save in DB
  await fetch("http://localhost:5000/save-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      paymentIntentId: result.paymentIntent.id
    })
  });

  alert("Payment Successful 🎉");
}
 
  }

  const handleRefaund = async (e) => {
    e.preventDefault();
    const refaund = await fetch("http://localhost:5000/refund", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    paymentIntentId: "pi_3T2E08JAy6jp7qyx0C4D7t28"
  })
});
console.log(refaund);
  }

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ marginBottom: "20px" }}>Secure Payment</h2>

        <div style={cardContainer}>
          <CardElement options={cardStyle} />
        </div>

        <button type="submit" style={buttonStyle}>
          Pay ₹500
        </button>
        <button onClick={handleRefaund}>refund</button>
      </form>
    </div>
  );
};

export default CheckoutForm;

/* -------- Styles -------- */

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#f5f7fa"
};

const formStyle = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  width: "350px"
};

const cardContainer = {
  border: "1px solid #e2e8f0",
  padding: "12px",
  borderRadius: "6px",
  marginBottom: "20px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#635bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer"
};
