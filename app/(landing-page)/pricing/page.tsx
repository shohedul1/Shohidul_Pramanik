"use client";


import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../components/Notification/Notification";
import { loadStripe } from "@stripe/stripe-js";




const pricingPlans = [
  { id: 1, title: "Basic", price: "$500", description: "Ideal for personal websites", features: ["Up to 5 pages", "Basic UI/UX", "Responsive design", "Basic SEO"] },
  { id: 2, title: "Starter", price: "$800", description: "Small business websites", features: ["Up to 10 pages", "Custom components", "Responsive design", "SEO optimized"] },
  { id: 3, title: "Standard", price: "$1,200", description: "Medium-sized businesses", features: ["Up to 20 pages", "Advanced UI/UX", "SEO & Performance optimized", "E-commerce features"] },
  { id: 4, title: "Pro", price: "$2,500", description: "Advanced apps with complex features", features: ["Multi-page app", "Full-stack (React + Node.js)", "Real-time features", "API integrations"] },
  { id: 5, title: "Premium", price: "$5,000", description: "Enterprise-level apps", features: ["Full-stack + Mobile App", "Custom APIs", "Payment Gateway", "24/7 Support"] },
  { id: 6, title: "Enterprise", price: "$10,000", description: "Custom enterprise solutions", features: ["Unlimited pages", "Custom development", "Dedicated support", "Cloud hosting"] },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Payment form states
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  // Function to handle opening the modal with selected plan
  const handleChoosePlan = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


  // Handle the payment completion and log data
  // const handleCompletePayment = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const updatedFormData = {
  //     ...formData,
  //     planTitle: selectedPlan?.title,
  //     planPrice: selectedPlan?.price,
  //   };

  //   try {
  //     const response = await fetch("/api/payment", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updatedFormData),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();

  //     if (data.success) {
  //       toast.success(data.message, { position: 'top-right' });
  //       setFormData({ cardNumber: "", expiryDate: "", cvv: "" });
  //       closeModal();
  //       const stripe = await stripePromise;
  //       const response = await fetch("/api/checkout", {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //               items: updatedFormData,
  //           }),
  //       });
  //       const data = await response.json();

  //       if (response.ok) {
  //           stripe?.redirectToCheckout({ sessionId: data.id });
  //       } else {
  //           throw new Error("Failed to create Stripe Payment");
  //       }


  //     } else {
  //       toast.error(data.error || "Payment failed", { position: 'top-right' });
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong. Please try again later.", { position: 'top-right' });
  //     console.error("Payment error:", error);
  //   }
  // };
  const handleCompletePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      planTitle: selectedPlan?.title,
      planPrice: selectedPlan?.price,
    };

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const paymentData = await response.json(); // ✅ Renamed to `paymentData`

      if (paymentData.success) {
        toast.success(paymentData.message, { position: 'top-right' });
        setFormData({ cardNumber: "", expiryDate: "", cvv: "" });
        closeModal();
      } else {
        toast.error(paymentData.error || "Payment failed", { position: 'top-right' });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", { position: 'top-right' });
      console.error("Payment error:", error);
    }
  };


  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <section className='min-h-screen pb-20 text-black'>
        <div className='container mx-auto'>
          <Fade direction="up" delay={420} cascade damping={0.1} triggerOnce>
            <div className="flex items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-semibold mb-4 tracking-[4px] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                My Pricing
              </div>
            </div>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true} key={plan.id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-gray-700">{plan.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 flex items-center gap-2">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan(plan)} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Choose Plan
                  </button>
                </div>
              </Fade>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-96">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Gateway</h3>
                <p className="mb-4">You have selected the <strong>{selectedPlan?.title}</strong> plan for <strong>{selectedPlan?.price}</strong>.</p>
                <p className="text-sm text-gray-600 mb-4">Please enter your payment details below:</p>

                {/* Payment Form Simulation */}
                <form onSubmit={handleCompletePayment}>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      placeholder="Card Number"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      placeholder="Expiry Date"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      placeholder="CVV"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                    >
                      Complete Payment
                    </button>
                    <button
                      type="button"
                      className="ml-4 text-gray-600"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <Notification />
    </>
  );
};

export default Pricing;

