
import React from "react";
import { Heart } from "lucide-react";

const Testimonies = () => {
  const testimonies = [
    {
      text: "The prayer sessions at Chosen Few helped me through the toughest time in my life. I felt God's presence like never before.",
      name: "Sarah"
    },
    {
      text: "I came to Chosen Few feeling lost and left with a renewed purpose. The community here truly walks in Christ's footsteps.",
      name: "Anonymous"
    },
    {
      text: "The fellowship meetings have deepened my understanding of scripture and strengthened my relationship with God.",
      name: "Anonymous"
    },
    {
      text: "I was once a lost sheep, but God spoke to me through Benny and Chosen Few. Their fellowship changed me, rooted me in Christ, and showed me His love. Now I serve in His ministry, surrounded by a joyful, godly family. Praise God!",
      name: "Pranav"
    },
    {
      text: "Grateful to be part of this crew—worshipping with blazing youngsters has been my heart’s desire. It’s a blessing to minister to youth from all walks of life. Honored to serve and proud of Benny for leading with God’s vision!",
      name: "Gracia"
    },
    {
      text: "The worship nights at Chosen Few have been the highlight of my month. I feel so connected to God during those moments.",
      name: "Anonymous"
    },
  ];

  return (
    <section id="testimonies" className="py-16 sermon-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimonies</h2>
        
        <div className="overflow-hidden">
          <div className="flex animate-infinite-scroll whitespace-normal py-6">
            {testimonies.map((testimony, index) => (
              <div key={index} className="testimony-card">
                <div className="text-chosen-orange mb-2">
                  <Heart className="christian-icon" size={20} />
                </div>
                <p className="text-gray-700 italic mb-2 max-w-[250px]">"{testimony.text}"</p>
                <p className="text-right text-chosen-orange font-medium">
                  - {testimony.name}
                </p>
              </div>
            ))}
            {/* Duplicate testimonies for seamless scrolling */}
            {testimonies.map((testimony, index) => (
              <div key={`duplicate-${index}`} className="testimony-card">
                <div className="text-chosen-orange mb-2">
                  <Heart className="christian-icon" size={20} />
                </div>
                <p className="text-gray-700 italic mb-2 max-w-[250px]">"{testimony.text}"</p>
                <p className="text-right text-chosen-orange font-medium">
                  - {testimony.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
