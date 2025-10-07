import React from "react";
import { useThemeStore } from "../../store/useThemeStore";
import { MessageSquare, Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hi!", isSent: false },
  { id: 2, content: "Hello", isSent: true },
  { id: 3, content: "Cool! Website", isSent: false },
  { id: 4, content: "Thanks buddy !!", isSent: true },
  { id: 5, content: "I mean it, lookd good", isSent: false },
  { id: 6, content: "Thanks buddy !!", isSent: true },
];

const PhoneMockup = () => {
  const { theme } = useThemeStore();

  return (
    <div className="flex justify-center items-center p-4">
      {/* Modern Phone Frame */}
      <div className="relative w-[360px] md:w-[400px] lg:w-[440px] h-[740px] rounded-[3rem] shadow-xl overflow-hidden bg-gray-900 border-[3px] border-gray-600">
        
        {/* Top Notch / Status Bar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="flex justify-between items-center px-4 h-6 text-xs text-white">
            <span>9:41 AM</span>
            <span>🔋 85%</span>
          </div>
          <div className="w-36 h-6 mx-auto bg-gray-700 rounded-b-full flex justify-center items-center relative mt-1">
            <div className="w-14 h-1 bg-gray-500 rounded-full absolute top-2" /> {/* speaker */}
            <div className="w-3 h-3 bg-gray-500 rounded-full absolute right-5 top-1" /> {/* camera */}
          </div>
        </div>

        {/* Chat Area */}
        <div className="absolute top-16 bottom-14 left-0 right-0 flex justify-center items-start p-4">
          <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg w-full max-w-md">
            <div className="p-4 bg-base-200">
              <div className="max-w-lg mx-auto">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      AG
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Aditya</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200 text-base-content"}
                        `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`
                            text-[10px] mt-1.5
                            ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0 flex items-center justify-center">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
