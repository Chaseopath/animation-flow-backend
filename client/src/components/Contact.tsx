import { useState } from "react";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('https://your-backend-domain.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: data.message
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.message
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-5">
            Get Started With <span className="text-purple-600">AutoConvert.ai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your lead qualification process? Request your free demo today.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <FadeInSection animation="slide-in-left" delay={300}>
            <div className="bg-white p-10 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-black">Why Choose AutoConvert.ai?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-check-circle text-purple-600 text-xl"></i>
                  </div>
                  <p className="text-gray-700 font-light">No more wasting time on unqualified leads</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-check-circle text-purple-600 text-xl"></i>
                  </div>
                  <p className="text-gray-700 font-light">Seamless integration with your existing tools</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-check-circle text-purple-600 text-xl"></i>
                  </div>
                  <p className="text-gray-700 font-light">Works 24/7, even when your team is off</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-check-circle text-purple-600 text-xl"></i>
                  </div>
                  <p className="text-gray-700 font-light">Typical ROI within the first 30 days</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <i className="fas fa-check-circle text-purple-600 text-xl"></i>
                  </div>
                  <p className="text-gray-700 font-light">No long-term contracts, cancel anytime</p>
                </li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection animation="slide-in-right" delay={400}>
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-600 text-white font-medium rounded-full py-4 px-6 cta-button hover:bg-purple-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Get your free consultation'}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitMessage.text}
                </div>
              )}
              <p className="text-sm text-gray-500 mt-4 text-center">
                We respect your privacy and will never share your information.
              </p>
              <p className="text-sm text-gray-500 mt-2 text-center">
                We'll chat about your lead flow bottlenecks to see if we can free you from the lost time and revenue
              </p>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
} 