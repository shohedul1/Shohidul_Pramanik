import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        cardNumber: { type: String, required: true },
        expiryDate: { type: String, required: true },
        cvv: { type: String, required: true },
        planTitle: { type: String, required: true },
        planPrice: { type: String, required: true },
    },
    { timestamps: true }
);

// Prevent model overwrite error
const Payment = mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;
