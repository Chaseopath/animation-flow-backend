import React from "react";
import FadeInSection from "./FadeInSection";
import { scrollToElement } from "@/lib/utils";

export default function GetStarted() {
  const steps = [
    {
      number: "1",
      title: "Book Your Demo",
      description: "Schedule a 30-minute call to discuss your lead qualification needs."
    },
    {
      number: "2",
      title: "Custom Setup",
      description: "We'll configure AutoConvert to match your specific qualification criteria."
    },
    {
      number: "3",
      title: "Go Live",
      description: "Start capturing and qualifying leads automatically within 24 hours."
    },
    {
      number: "4",
      title: "Scale & Optimize",
      description: "Monitor results and fine-tune your qualification process for maximum ROI."
    }
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-20" id="get-started-heading">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            How to <span className="text-purple-400">Get Started</span>
          </h2>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeInSection
              key={index}
              className="bg-gray-900 p-8 rounded-3xl relative overflow-hidden"
              animation="fade-in"
              delay={300 + index * 150}
            >
              <div className="absolute -top-6 -right-6 text-8xl font-bold text-purple-800/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white relative z-10">{step.title}</h3>
              <p className="text-gray-300 relative z-10 font-light">{step.description}</p>
            </FadeInSection>
          ))}
        </div>
        
        <FadeInSection className="text-center mt-16" animation="slide-up" delay={1200}>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="cta-button bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all text-lg inline-flex items-center"
          >
            <span>Get your free consultation</span>
          </a>
          <p className="text-sm text-gray-400 mt-3 max-w-lg mx-auto">
            We'll chat about your lead flow bottlenecks to see if we can free you from the lost time and revenue
          </p>
        </FadeInSection>
      </div>
    </section>
  );
} 