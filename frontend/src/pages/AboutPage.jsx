import React from "react";
import { MessageSquareHeart, Users, Zap, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="relative py-24 bg-base-100 overflow-hidden">
      {/* Glowing Background Shapes */}
      <div className="absolute -top-10 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
            About <span className="text-base-content">Whispr</span>
          </h2>
          <p className="text-base-content/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Whispr is built to make conversations feel effortless, instant, and beautifully human.
            We believe that real-time messaging should be more than just text — it should feel alive.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-base-content">
              Redefining how people connect online.
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              Born out of the idea that communication should be both meaningful and fluid,
              Whispr combines cutting-edge technology with a soft, friendly design.
              Whether chatting with a friend or a group, Whispr makes every message feel personal.
            </p>
            <p className="text-base-content/70 leading-relaxed">
              With fast servers, beautiful UI, and a privacy-first approach, it’s built to be your go-to space for everyday conversations — simple, secure, and fun.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-base-300/40">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80"
                alt="Chatting illustration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <MessageSquareHeart className="w-10 h-10 text-primary" />,
              title: "Real-Time Messaging",
              desc: "Chat instantly with smooth, low-latency communication powered by modern tech.",
            },
            {
              icon: <Shield className="w-10 h-10 text-primary" />,
              title: "Privacy First",
              desc: "We protect your conversations with end-to-end security and encrypted data handling.",
            },
            {
              icon: <Zap className="w-10 h-10 text-primary" />,
              title: "Lightning Fast",
              desc: "Optimized servers and sockets make Whispr faster and more reliable than ever.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-base-200/50 backdrop-blur-xl rounded-2xl border border-base-300/40 p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-base-content mb-2">{item.title}</h3>
              <p className="text-base-content/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 text-center mb-24">
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Messages Sent", value: "10M+" },
            { label: "Communities", value: "1K+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 bg-base-200/40 rounded-2xl backdrop-blur-xl border border-base-300/30 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-4xl font-extrabold text-primary mb-2">{stat.value}</h3>
              <p className="text-base-content/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-base-content mb-4">
            We're just getting started 🚀
          </h3>
          <p className="text-base-content/70 max-w-2xl mx-auto mb-8">
            Join thousands already chatting, sharing, and connecting on Whispr.  
            Be part of the next generation of real-time communication.
          </p>
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage ;
