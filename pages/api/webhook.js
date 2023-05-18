import { mongooseConnect } from "@/lib/mongoose"
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const endpointSecret = "whsec_b8a4a3ffdb3590592e29baf2203c99b19e6fe1d1c11545a4672ead1e032e031b";


export default async function handler(req, res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log(paymentIntentSucceeded)
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}

export const config = {
  api: {bodyParser: false,}
}