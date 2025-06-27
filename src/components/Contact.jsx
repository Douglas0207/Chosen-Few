
import React, { useState } from "react";
import { Mail, Heart, Check } from "lucide-react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactForm)
      });
  
      if (res.ok) {
        console.log("✅ Contact form submitted:", contactForm);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setContactForm({ name: "", email: "", message: "" });
        }, 10000);
      } else {
        console.error("❌ Failed to submit form");
      }
    } catch (err) {
      console.error("❌ Error submitting form:", err);
    }
  };

  return (
    <section id="contact" className="section-padding bg-chosen-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Get in Touch</h3>
          <p className="mb-8 text-gray-600 text-center">
            We'd love to hear from you whether you have questions, want to join our fellowship, 
            or need prayer support. Reach out through this form or any of our social channels.
          </p>
            
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:connect@chosenfew.org" 
              className="flex items-center gap-3 text-gray-700 hover:text-chosen-orange transition-colors button-animation"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://instagram.com/chosenfew" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-chosen-orange transition-colors button-animation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
            <a 
              href="https://wa.me/+11234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-chosen-orange transition-colors button-animation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg flex flex-col items-center animate-fade-in">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Check size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-center">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-chosen-orange/50 focus:border-chosen-orange outline-none"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-chosen-orange/50 focus:border-chosen-orange outline-none"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg h-36 focus:ring-2 focus:ring-chosen-orange/50 focus:border-chosen-orange outline-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-chosen-orange text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors duration-200 button-animation"
              >
                <Heart size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
