import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Whispr?",
      answer:
        "Whispr is a real-time chat platform where users can connect instantly, share messages, and view online/offline statuses — all in a sleek, secure interface.",
    },
    {
      question: "Is Whispr free to use?",
      answer:
        "Yes! Whispr is completely free to use. We plan to introduce optional premium features in the future for teams and businesses.",
    },
    {
      question: "Can I chat with multiple users?",
      answer:
        "Currently, Whispr supports one-on-one chats. Group chat functionality is under development and coming soon!",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. Whispr uses end-to-end encryption and secure socket connections to ensure your messages stay private.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-base-100 to-base-200">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl opacity-50"></div>

      <div className="relative max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
          Have questions about Whispr? We’ve got the answers right here.
        </p>
      </div>

      {/* FAQ List */}
      <div className="relative max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-base-content/10 rounded-2xl p-6 transition-all duration-300 ${
              openIndex === index
                ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/10"
                : "bg-base-200 hover:border-primary/20 hover:bg-base-300/40"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold text-base-content">
                {faq.question}
              </h3>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-primary" : "text-base-content/50"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base-content/70 text-left">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
