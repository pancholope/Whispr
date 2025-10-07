import React from "react";
import { Facebook, Twitter, Github, Linkedin, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content/80 pt-16 pb-8 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Whispr</h2>
          </div>
          <p className="text-base-content/60">
            Real-time chat made simple.  
            Stay connected securely and effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-base-content">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-primary transition">Features</a></li>
            <li><a href="/signup" className="hover:text-primary transition">Get Started</a></li>
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-base-content">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition">API Reference</a></li>
            <li><a href="#" className="hover:text-primary transition">Community</a></li>
            <li><a href="#" className="hover:text-primary transition">Support</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-base-content">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-base-100 hover:bg-primary/10 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-base-100 hover:bg-primary/10 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-base-100 hover:bg-primary/10 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-base-100 hover:bg-primary/10 transition">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-10 before:bg-base-300 after:bg-base-300"></div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-base-content/60">
        © {new Date().getFullYear()} <span className="font-semibold text-base-content">Whispr</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
