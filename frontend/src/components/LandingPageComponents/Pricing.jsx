import React from "react";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    price: "₹0",
    description: "Perfect for trying out Whispr and chatting with your friends.",
    features: [
      "1-to-1 Real-Time Chat",
      "Profile Customization",
      "Online/Offline Status",
      "Access on Any Device",
    ],
  },
  {
    name: "Pro Plan",
    price: "₹299/month",
    description: "For active users who want an enhanced, ad-free experience.",
    features: [
      "Unlimited Messaging",
      "Media Sharing (Images & Files)",
      "Priority Server Access",
      "Ad-Free Experience",
    ],
  },
  {
    name: "Team Plan",
    price: "₹699/month",
    description: "Built for small teams and communities that chat together.",
    features: [
      "Group Chats & Channels",
      "Admin Controls",
      "Custom Themes",
      "Analytics Dashboard",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 blur-3xl rounded-full animate-pulse opacity-30"></div>

      {/* Section Header */}
      <div className="text-center mb-20 px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
          Pricing Plans
        </h2>
        <p className="text-base-content/60 md:text-lg max-w-3xl mx-auto leading-relaxed">
          Choose the plan that fits your needs and start enjoying{" "}
          <span className="font-semibold text-primary">Whispr</span> without limits.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-base-300/40 bg-base-200/50 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Plan Title */}
            <h3 className="text-2xl font-bold text-base-content mb-2 transition-colors duration-300 group-hover:text-primary">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-4xl font-extrabold text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
              {plan.price}
            </p>

            {/* Description */}
            <p className="text-base-content/70 mb-6">{plan.description}</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-base-content/80 group-hover:text-base-content transition-colors duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-base-300/60 text-base-content hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
