import React from "react";
import { UserPlus, Users, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-12 h-12 text-primary" />,
    title: "Sign Up",
    description: "Create your account in seconds and join the Whispr community.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Connect",
    description: "Find your friends and start building your chat network instantly.",
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
    title: "Start Chatting",
    description: "Send messages in real-time, see who's online, and enjoy the seamless experience.",
  },
];

const Working = () => {
  return (
    <section className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Glow Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 blur-3xl rounded-full animate-pulse opacity-30"></div>

      {/* Section Header */}
      <div className="text-center mb-20 px-6 relative z-10">

  {/* Heading */}
  <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 relative inline-block">
    How It Works
  </h2>

  {/* Subtitle */}
  <p className="text-base-content/60 md:text-lg max-w-3xl mx-auto leading-relaxed">
    Getting started is simple. Follow these three easy steps to join <span className="font-semibold text-primary">Whispr</span> and start chatting instantly.
  </p>
</div>


      {/* Timeline */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            {/* Connector line */}
            {index !== steps.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 left-full w-40 h-1 bg-primary/20">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  <span className="w-3 h-3 bg-primary rounded-full ml-10"></span>
                  <svg
                    className="w-6 h-6 ml-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            )}

            {/* Step Card */}
            <div className="relative z-10 flex flex-col items-center bg-base-200/50 backdrop-blur-xl rounded-2xl p-8 border border-base-300/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-base-content mb-2">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Working;
