import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { items } = req.body; // The items passed from the frontend
            console.log(items)

            // Create an array of line items for Stripe
            const lineItems = items.map((item: any) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.planTitle,
                    },
                    unit_amount: parseFloat(item.planPrice.replace("$", "")) * 100, // Convert price to cents
                },
                quantity: 1,
            }));

            // Create the Checkout session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: lineItems,
                mode: "payment",
                success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`, // Redirect to a success page
                cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`, // Redirect to a cancel page
            });

            // Return the session ID to the frontend
            res.status(200).json({ id: session.id });
        } catch (error) {
            console.error("Error creating checkout session:", error);
            res.status(500).json({ error: "Failed to create checkout session" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
