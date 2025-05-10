import React from "react";
import FadeInSection from "./FadeInSection";
import { scrollToElement } from "@/lib/utils";

export default function Industries() {
  const industries = [
    {
      title: "Real Estate",
      description: "Qualify property buyers and sellers instantly, matching them with the right agents.",
      icon: "fa-home"
    },
    {
      title: "Financial Services",
      description: "Identify high-value prospects and streamline your financial consultation process.",
      icon: "fa-chart-line"
    },
    {
      title: "Healthcare",
      description: "Connect patients with the right specialists and services efficiently.",
      icon: "fa-heartbeat"
    },
    {
      title: "Technology",
      description: "Qualify leads for your SaaS, hardware, or IT services automatically.",
      icon: "fa-microchip"
    },
    {
      title: "Education",
      description: "Match students with the right courses and programs based on their needs.",
      icon: "fa-graduation-cap"
    },
    {
      title: "Professional Services",
      description: "Streamline client intake and qualification for law firms, consulting, and more.",
      icon: "fa-briefcase"
    }
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  return (
    <section id="industries" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-5">
            Perfect for <span className="text-purple-600">Any Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            AutoConvert adapts to your specific industry needs, helping you qualify leads more effectively.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <FadeInSection
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all"
              animation="fade-in"
              delay={200 + index * 100}
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className={`fas ${industry.icon} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{industry.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {industry.description}
              </p>
            </FadeInSection>
          ))}
        </div>
        
        <FadeInSection className="text-center mt-16" animation="fade-in" delay={1200}>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="cta-button bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-lg inline-flex items-center"
          >
            <span>See It In Action</span>
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
        </FadeInSection>
      </div>
    </section>
  );
} 