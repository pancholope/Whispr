import React from "react";
import { MessageCircleHeart } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute -top-10 left-10 w-80 h-80 bg-primary/20 blur-3xl rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-3xl rounded-full animate-pulse opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center bg-base-200/50 backdrop-blur-xl border border-base-300/40 rounded-full px-6 py-2 mb-6">
          <MessageCircleHeart className="w-5 h-5 text-primary mr-2" />
          <span className="text-sm font-medium text-base-content/80">
            Ready to start chatting?
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold text-base-content mb-6 leading-tight">
          Join <span className="text-primary">Whispr</span> Today
        </h2>

        <p className="text-base-content/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Connect, share, and build meaningful conversations with friends — all in real-time.  
          Experience smooth, modern messaging made for everyone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-xl border border-base-300/50 bg-base-200/50 backdrop-blur-md text-base-content font-semibold text-lg transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-24 text-base-100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
