import React, { useState } from "react";
import { cn, scrollToElement } from "@/lib/utils";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600 relative">
              AutoConvert<span className="text-black">.ai</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 animate-expand"></span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>How It Works</NavLink>
            <NavLink href="#results" onClick={(e) => handleNavClick(e, 'results')}>Results</NavLink>
            <NavLink href="#industries" onClick={(e) => handleNavClick(e, 'industries')}>Industries</NavLink>
            <NavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</NavLink>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="cta-button bg-purple-600 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-700 text-sm inline-flex items-center group"
            >
              <span>Get your free consultation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden bg-white py-4 px-4 shadow-lg border-t border-gray-100 absolute w-full",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="block py-2 text-gray-700 hover:text-purple-600 font-medium">How It Works</a>
        <a href="#results" onClick={(e) => handleNavClick(e, 'results')} className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Results</a>
        <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Industries</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Contact</a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="mt-4 block text-center cta-button bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 w-full"
        >
          Get your free consultation
        </a>
      </div>
    </nav>
  );
}

function NavLink({ href, onClick, children }: { href: string; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 origin-left transition-all duration-200 group-hover:w-full"></span>
    </a>
  );
} 