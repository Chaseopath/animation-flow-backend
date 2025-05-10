import React from "react";
import FadeInSection from "./FadeInSection";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  return (
    <section className="bg-black text-white py-28 md:py-36 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex items-center justify-between gap-16">
          <FadeInSection className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Website Visitors Into Qualified Leads, <span className="text-purple-400">Automatically</span>.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 font-light">
              Our AI qualifies leads 24/7, booking sales-ready prospects directly onto your
              calendar. Stop chasing, start closing.
            </p>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="cta-button bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-500 transition-all text-lg inline-flex items-center"
            >
              <span>Get your free consultation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-sm text-gray-400 mt-3 max-w-lg">
              We'll chat about your lead flow bottlenecks to see if we can free you from the lost time and revenue
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
} 