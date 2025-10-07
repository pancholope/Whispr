import React from "react";

const Demo = () => {
  return (
    <section className="relative py-24 bg-base-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-secondary/10 blur-3xl rounded-full opacity-40 animate-pulse"></div>

      {/* Section Header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-primary mb-4">
          Experience Whispr in Action
        </h2>
        <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
          See how real-time chat, online presence, and modern UI come together
          for a seamless communication experience.
        </p>
      </div>

      {/* Demo Chat Frame */}
      <div className="relative z-10 flex justify-center px-6">
        <div className="bg-base-200 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden border border-base-300/50">
          {/* Mock Top Bar */}
          <div className="bg-base-100 px-6 py-3 flex items-center justify-between border-b border-base-300/30">
            <span className="font-semibold text-base-content">Whispr Chat</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-base-content/60">Online</span>
            </div>
          </div>

          {/* Mock Messages */}
          <div className="px-6 py-8 space-y-4 h-96 overflow-y-auto bg-base-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
              <div className="bg-primary/10 text-base-content/90 p-3 rounded-2xl max-w-xs">
                Hey there! Have you tried the new Whispr demo?
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-secondary/10 text-base-content/90 p-3 rounded-2xl max-w-xs">
                Yes! The real-time messaging is so smooth.
              </div>
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold">B</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
              <div className="bg-primary/10 text-base-content/90 p-3 rounded-2xl max-w-xs">
                You can even see who’s online instantly!
              </div>
            </div>
          </div>

          {/* Mock Input */}
          <div className="bg-base-100 px-6 py-4 border-t border-base-300/30 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 input input-bordered rounded-full px-4 py-2 text-base-content/80"
            />
            <button className="btn btn-primary rounded-full px-6 py-2">Send</button>
          </div>
        </div>
      </div>

        <div className="relative z-10 mt-24 h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
    
    </section>
  );
};

export default Demo;
