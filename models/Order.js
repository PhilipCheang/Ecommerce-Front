import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  phoneNumber: String,
  email: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  paid: Boolean,
});

export const Order = models?.Order || model('Order', OrderSchema);