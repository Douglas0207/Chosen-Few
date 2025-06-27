
import React, { useState } from "react";
import pic1 from "../components/assets/pic1.jpg";
import pic2 from "../components/assets/pic2.jpg";
import pic3 from "../components/assets/pic3.jpg";
import pic4 from "../components/assets/pic4.jpg";
import pic5 from "../components/assets/pic5.jpg";
import pic6 from "../components/assets/pic6.jpg";
import pic7 from "../components/assets/pic8.jpg";
import pic8 from "../components/assets/pic9.jpg";
import pic9 from "../components/assets/pic10.jpg";
import pic10 from "../components/assets/pic11.jpg";
import pic0 from "../components/assets/pic0.jpg";
import pic12 from "../components/assets/pic12.jpeg";

const Meetings = () => {
  const [showAll, setShowAll] = useState(false);
  
  const meetings = [
    {
      id: 0,
      title: "Monthly Fellowship",
      date: "May 24, 2025",
      description: "All glory to God! we had our 15th fellowship which involved people from various parts of the city!",
      image: pic12
    },
    {
      id: 1,
      title: "Monthly Fellowship",
      date: "April 29, 2025",
      description: "All glory to God! we had our 14th youth fellowship which involved people from various parts of the city!",
      image: pic10
    },
    {
      id: 2,
      title: "Monthly Fellowship",
      date: "March 22, 2025",
      description: "All glory to God! we had our 13th youth fellowship which involved people from various parts of the city!",
      image: pic9
    },
    {
      id: 3,
      title: "Monthly Fellowship",
      date: "February 22, 2025",
      description: "All glory to God! we had our 1st year Anniversary for our CHOSEN FEW FELLOWSHIP which involved people from various parts of the city!",
      image: pic8
    },
    {
      id: 4,
      title: "Monthly Fellowship",
      date: "January 24, 2025",
      description: "All glory to God! we had our Eleventh youth fellowship which involved people from various parts of the city!",
      image: pic7
    },
    {
      id: 5,
      title: "Monthly Fellowship",
      date: "November 14, 2024",
      description: "All glory to God! we had our 5th youth fellowship which involved people from various parts of the city!",
      image: pic5
    },
    {
      id: 6,
      title: "Monthly Fellowship",
      date: "October 25, 2024",
      description: "All glory to God! we had our 4th youth fellowship which involved people from various parts of the city!",
      image: pic4
    },
    {
      id: 7,
      title: "Monthly Fellowship",
      date: "September 21, 2024",
      description: "All glory to God! we had our 3rd youth fellowship which involved people from various parts of the city!",
      image: pic3
    },
    {
      id: 8,
      title: "Monthly Fellowship",
      date: "August 16, 2024",
      description: "All glory to God! we had our 2nd youth fellowship which involved people from various parts of the city!",
      image: pic2
    },
    {
      id: 9,
      title: "Praise and Worship",
      date: "August 7, 2024",
      description: "We had an amazing time today worshipping the Lord as a band. Very glad to have Jachin on board.",
      image: pic6
    },
    {
      id: 10,
      title: "Monthly Fellowship",
      date: "July 26, 2024",
      description: "All glory to God! we had our 1st youth fellowship which involved people from various parts of the city!",
      image: pic1
    },
    {
      id: 11,
      title: "Chosen Few Core Team",
      date: "July 25, 2024",
      description: "Officially presenting, The Chosen Few's Core Team.",
      image: pic0
    }
  ];

  // Display either the first 3 meetings or all meetings
  const displayedMeetings = showAll ? meetings : meetings.slice(0, 3);

  return (
    <section id="meetings" className="section-padding bg-chosen-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Recent Meetings</h2>
        
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our past gatherings, worship nights, and fellowship events that have strengthened 
          our faith and community bonds.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedMeetings.map((meeting) => (
            <div key={meeting.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={meeting.image} 
                  alt={meeting.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{meeting.title}</h3>
                <p className="text-chosen-orange text-sm mb-3">{meeting.date}</p>
                <p className="text-gray-600">{meeting.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          {!showAll && meetings.length > 3 ? (
            <button
              onClick={() => setShowAll(true)}
              className="bg-chosen-blue text-gray-800 px-6 py-3 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              Show More Meetings
            </button>
          ) : showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="bg-chosen-blue text-gray-800 px-6 py-3 rounded-full hover:bg-blue-200 transition-colors duration-200"
            >
              Hide Meetings
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Meetings;
