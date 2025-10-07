import React from "react";
import { Star, MessageSquare } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="mt-10 min-h-screen grid lg:grid-cols-[60%_40%] items-center bg-base-100 overflow-hidden">
      
      {/* LEFT SIDE - TEXT */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 space-y-10 text-center lg:text-left">
        {/* Logo/Heading */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="size-7 text-primary" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            Real-Time Chat,<br /> Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-base-content/60 max-w-xl">
            Experience secure, fast, and seamless messaging with friends, family, and teams. 
            Connect instantly without compromising your privacy.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 pt-2 justify-center lg:justify-start">
          <a
            href="/signup"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/70 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-primary/40 transition-all duration-300"
          >
             Get Started Free
          </a>
          <a
            href="#features"
            className="px-10 py-4 rounded-xl border border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
             See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-10 pt-10 text-base-content justify-center lg:justify-start">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className="font-bold text-lg sm:text-xl">1M+</span>
            <span>Downloads</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-lg sm:text-xl">4.8/5</span>
            </div>
            <span>Rating</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className="font-bold text-lg sm:text-xl">22,861</span>
            <span>Happy Users</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Phone Mockup */}
      <div className="relative flex items-center justify-center bg-base-100 py-12">
        {/* Floating Glow Effects */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

        {/* Phone Mockup */}
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;
