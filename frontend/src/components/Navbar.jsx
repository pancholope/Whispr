import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, MessageSquare , User, Menu, X } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-base-100/80 backdrop-blur-lg border-b border-base-300 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-lg md:text-xl font-bold">Whispr</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-3 py-1 rounded-md text-base-content/80 hover:text-primary hover:bg-base-200 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/settings"
            className="btn btn-sm gap-2 ml-4 hover:scale-105 transition-transform duration-300"
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {!authUser ? (
            <Link
              to="/login"
              className="btn btn-sm ml-2 hover:scale-105 transition-transform duration-300"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                className="btn btn-sm gap-2 ml-2 hover:scale-105 transition-transform duration-300"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button
                onClick={logout}
                className="btn btn-sm ml-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-base-200 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100/90 backdrop-blur-lg border-t border-base-300 shadow-lg">
          <nav className="flex flex-col items-start px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="w-full px-3 py-2 rounded-md text-base-content/80 hover:text-primary hover:bg-base-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/settings"
              className="btn btn-sm gap-2 w-full hover:scale-105 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" /> Settings
            </Link>

            {!authUser ? (
              <Link
                to="/login"
                className="btn btn-sm w-full hover:scale-105 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="btn btn-sm gap-2 w-full hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4" /> Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="btn btn-sm w-full flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
