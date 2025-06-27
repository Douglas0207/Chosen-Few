
// import React from "react";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import pfp from '../components/assets/pfp.png'

// const Team = () => {
//   // In a real app, this data would come from MongoDB
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Benny Hinn Jebasen",
//       role: "Group Leader",
//       image: pfp
//     },
//     {
//       id: 2,
//       name: "Name",
//       role: "Prayer Coordinator",
//       image: pfp
//     },
//     {
//       id: 3,
//       name: "Name",
//       role: "Worship Leader",
//       image: pfp
//     },
//     {
//       id: 4,
//       name: "Name",
//       role: "Bible Study Leader",
//       image: pfp
//     },
//     {
//       id: 5,
//       name: "Name",
//       role: "Outreach Coordinator",
//       image: pfp
//     },
//     {
//       id: 6,
//       name: "Name",
//       role: "Social Media Manager",
//       image: pfp
//     },
//     {
//       id: 7,
//       name: "Name",
//       role: "Hospitality Coordinator",
//       image: pfp
//     },
//     {
//       id: 8,
//       name: "Name",
//       role: "Events Planner",
//       image: pfp
//     },
//     {
//       id: 9,
//       name: "Name",
//       role: "Mentoring Coordinator",
//       image: pfp
//     },
//     {
//       id: 10,
//       name: "Name",
//       role: "Treasurer",
//       image: pfp
//     },
//     {
//       id: 11,
//       name: "Name",
//       role: "Technical Support",
//       image: pfp
//     },
//     {
//       id: 12,
//       name: "Name",
//       role: "Communications Director",
//       image: pfp
//     },
//     {
//       id: 13,
//       name: "Name",
//       role: "Youth Ambassador",
//       image: pfp
//     },
//     {
//       id: 14,
//       name: "Name",
//       role: "Creative Arts Director",
//       image: pfp
//     },
//     {
//       id: 15,
//       name: "Name",
//       role: "Service Project Leader",
//       image: pfp
//     },
//     {
//       id: 16,
//       name: "Name",
//       role: "Small Group Leader",
//       image: pfp
//     },
//     {
//       id: 17,
//       name: "Name",
//       role: "Membership Coordinator",
//       image: pfp
//     },
//     {
//       id: 18,
//       name: "Name",
//       role: "Community Liaison",
//       image: pfp
//     }
//   ];

//   return (
//     <section id="team" className="section-padding">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">Meet the Team</h2>
        
//         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//           Our dedicated core members who serve with passion and purpose,
//           bringing diverse gifts to nurture our fellowship.
//         </p>
        
//         <div className="grid gap-8 grid-cols-3 lg:grid-cols-5">
//           {teamMembers.map((member) => (
//             <div key={member.id} className="team-card card-animation">
//               <div className="w-full mb-4 border-2 border-chosen-orange overflow-hidden">
//                 <AspectRatio ratio={3/4}>
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </AspectRatio>
//               </div>
//               <h3 className="font-bold text-lg mb-1">{member.name}</h3>
//               <p className="text-chosen-orange text-sm">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
