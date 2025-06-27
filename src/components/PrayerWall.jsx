import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const PrayerWall = () => {
  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch public prayers from the backend
  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const res = await fetch("https://chosen-few-backend.onrender.com/api/prayers/public");
        const data = await res.json();
        setPrayers(data);
      } catch (err) {
        console.error("Error fetching prayers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayers();
  }, []);

  // Handle "I Prayed" button click (local increment for now)
  const handlePrayerClick = (id) => {
    setPrayers(prayers.map(prayer =>
      prayer._id === id
        ? { ...prayer, prayerCount: (prayer.prayerCount || 0) + 1 }
        : prayer
    ));
  };

  return (
    <section id="prayer-wall" className="bg-chosen-blue/10 section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Prayer Wall</h2>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Share your prayer requests and pray for others. When we come together in prayer, 
          we experience God's presence and power in remarkable ways.
        </p>

        {loading ? (
          <p className="text-center text-gray-500 mb-10">Loading prayer requests...</p>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {!loading && prayers.map((prayer) => (
            <div key={prayer._id} className="prayer-card card-animation">
              <p className="mb-4">{prayer.prayerRequest}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">{prayer.name}</p>
                <button
                  onClick={() => handlePrayerClick(prayer._id)}
                  className="flex items-center gap-2 text-chosen-orange hover:text-amber-600 transition-colors"
                >
                  <Heart size={16} />
                  <span>{prayer.prayerCount || 0} praying</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#prayer-request"
            className="bg-chosen-orange text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors duration-200 inline-flex items-center gap-2 button-animation"
          >
            <Heart size={16} />
            <span>Submit Prayer Request</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrayerWall;