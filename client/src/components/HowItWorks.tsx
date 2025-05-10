import React, { useRef, useEffect } from "react";
import FadeInSection from "./FadeInSection";
import { scrollToElement } from "@/lib/utils";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation is now handled by FadeInSection
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  return (
    <section id="how-it-works" className="py-28 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-20" id="how-it-works-heading">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-5">
            How AutoConvert <span className="text-purple-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our intelligent system engages visitors, qualifies them based on your criteria, and seamlessly connects the best leads with your team.
          </p>
        </FadeInSection>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <FadeInSection
            className="bg-white p-10 rounded-3xl card-hover transition-all border border-gray-100 shadow-sm"
            id="card-1"
            animation="slide-in-left"
            delay={600}
          >
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-comments text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">1. Engage Instantly</h3>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Personalized chat captures visitor interest at its peak.
            </p>
          </FadeInSection>
        </div>
        
        <FadeInSection 
          className="text-center" 
          id="how-it-works-cta" 
          animation="slide-up"
          delay={1400}
        >
          <a
            href="#contact"
            onClick={handleContactClick}
            className="cta-button bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-lg group inline-flex items-center"
          >
            <span>Get your free consultation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <p className="text-sm text-gray-500 mt-3 max-w-lg mx-auto">
            We'll chat about your lead flow bottlenecks to see if we can free you from the lost time and revenue
          </p>
        </FadeInSection>
      </div>
    </section>
  );
} 