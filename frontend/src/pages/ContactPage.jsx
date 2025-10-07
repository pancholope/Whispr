import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl font-extrabold text-primary mb-4 drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, suggestion, or
          just want to say hi — feel free to reach out.
        </p>
      </div>

      {/* Contact section */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl relative z-10">
        {/* Contact Info */}
        <div className="bg-base-100/60 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-base-300/30">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Contact Information
          </h2>
          <div className="space-y-6 text-base-content/80">
            <div className="flex items-center gap-4">
              <MapPin className="text-primary w-6 h-6" />
              <p>Kolkata, India</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary w-6 h-6" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary w-6 h-6" />
              <p>support@whispr.com</p>
            </div>

            <div className="mt-10 text-sm text-base-content/60">
              We usually reply within 24 hours.
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-base-100/60 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-base-300/30 space-y-6">
          <div>
            <label className="block text-sm font-medium text-base-content/70 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full input input-bordered bg-base-200/70 focus:border-primary focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content/70 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full input input-bordered bg-base-200/70 focus:border-primary focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content/70 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full textarea textarea-bordered bg-base-200/70 focus:border-primary focus:ring-primary/30"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
