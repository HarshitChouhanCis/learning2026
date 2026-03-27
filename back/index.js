const express = require('express')
const cors = require("cors");
require('dotenv').config()

const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express()
app.use(cors())
app.use(express.json())

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe uses paisa / cents
      currency: "inr",
      automatic_payment_methods: { enabled: true }
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/refund", async (req, res) => {
  try {

    const { paymentIntentId } = req.body;

    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: 10000
    });

    res.json({
      message: "Refund successful",
      refund
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.post("/save-payment", (req, res) => {

  const { paymentIntentId } = req.body;

  console.log("Save this ID in database:", paymentIntentId);

  res.send("Saved");
});


app.post(
  "/stripe-webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle event
    switch (event.type) {

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;

        console.log("Payment successful:", paymentIntent.id);

        // ✅ Save payment in DB
        break;

      case "payment_intent.payment_failed":
        const failedIntent = event.data.object;

        console.log("Payment failed:", failedIntent.id);

        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  }
);

app.listen(5000,()=>console.log("server is running"))