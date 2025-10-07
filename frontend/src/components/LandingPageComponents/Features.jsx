import React from "react";
import {
  MessageSquare,
  Users,
  ShieldCheck,
  UserCog,
  MonitorSmartphone,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-7 h-7 text-primary" />,
    title: "1-on-1 Messaging",
    points: [
      "Real-time chats powered by Socket.IO",
      "Message delivery & read receipts",
      "Typing indicators and timestamps",
    ],
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Online Presence",
    points: [
      "See who’s active with live green dot indicators",
      "Automatic online/offline status updates",
    ],
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Privacy & Security",
    points: [
      "End-to-end encrypted communication",
      "Secure JWT authentication and Bcrypt password hashing",
      "Protected user sessions with token-based access",
    ],
  },
  {
    icon: <UserCog className="w-7 h-7 text-primary" />,
    title: "Profile Management",
    points: [
      "Personalize your avatar, bio, and display name",
      "View other profiles directly in chat",
      "Instant sync across all sessions",
    ],
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7 text-primary" />,
    title: "Cross-Platform Experience",
    points: [
      "Optimized for both desktop and mobile screens",
      "Seamless design consistency across devices",
      "Progressive Web App (PWA) ready setup",
    ],
  },
  {
    icon: <Palette className="w-7 h-7 text-primary" />,
    title: "Beautiful UI",
    points: [
      "Built with React and Tailwind CSS",
      "Elegant, minimal, and responsive design",
      "Delightful animations and smooth interactions",
    ],
  },
];

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-base-100 via-base-200/40 to-base-100">
      {/* Floating Background Glow */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 blur-3xl rounded-full opacity-40 animate-pulse"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-20 px-6">
        <h2 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Features That Make Whispr Exceptional
        </h2>
        <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
          Whispr combines real-time communication, intuitive UI, and rock-solid
          security to create a modern messaging experience you’ll love.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-base-100/60 backdrop-blur-xl border border-base-300/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-base-content group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
            </div>
            <ul className="list-disc list-inside text-base-content/70 space-y-2 ml-2">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Accent Line */}
      <div className="relative z-10 mt-24 h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
    </section>
  );
};

export default Features;
