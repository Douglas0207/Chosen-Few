
import React, { useState } from "react";
import { Check } from "lucide-react";

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    isAnonymous: false,
    email: "",
    prayerRequest: "",
    isPublic: true
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/api/prayers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log("Prayer request submitted:", formData);
        setIsSubmitted(true);
  
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            isAnonymous: false,
            email: "",
            prayerRequest: "",
            isPublic: true
          });
        }, 10000);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting prayer request:", error);
    }
  };

  return (
    <section id="prayer-request" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Submit Prayer Request</h2>
        
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Share your prayer needs with our community. You may choose to remain anonymous,
          and you can decide whether your request is shared publicly on the prayer wall.
        </p>
        
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Check size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Prayer Request Received</h3>
              <p className="text-center">
                Thank you for sharing your prayer request. Our community will be praying for you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-chosen-orange/50 focus:border-chosen-orange outline-none"
                  disabled={formData.isAnonymous}
                  required={!formData.isAnonymous}
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span>Submit Anonymously</span>
                </label>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-chosen-orange/50 focus:border-chosen-orange outline-none"
                  placeholder="For follow-up (never displayed publicly)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This is only for the admin team to follow up if needed. Never shared publicly.
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Prayer Request</label>
                <textarea
                  name="prayerRequest"
                  value={formData.prayerRequest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg h-36 focus:ring-2 focus:ring-chosen-orange/50 focus:border-chosen-orange outline-none"
                  placeholder="Share what you'd like us to pray for..."
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Visibility</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={() => setFormData({...formData, isPublic: true})}
                      className="mr-2"
                    />
                    <span>Public (Show on Prayer Wall)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isPublic"
                      checked={!formData.isPublic}
                      onChange={() => setFormData({...formData, isPublic: false})}
                      className="mr-2"
                    />
                    <span>Private (Staff Only)</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-chosen-orange text-white py-3 rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                Submit Prayer Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PrayerRequest;
