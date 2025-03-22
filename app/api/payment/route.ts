import { NextResponse } from "next/server";
import Payment from "@/models/Payment"; // Import your Mongoose model
import connectDb from "@/config/connectDb";

export async function POST(req: Request) {
  try {
    await connectDb();
    const body = await req.json();

    // Validate data
    if (!body.cardNumber || !body.expiryDate || !body.cvv) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Create new payment document
    const payment = new Payment(body);
    await payment.save();

    return NextResponse.json({ success: true, message: "Payment recorded successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
