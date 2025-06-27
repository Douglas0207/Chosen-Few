import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("http://localhost:5050/api/prayers/admin");
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error("Failed to fetch prayer requests", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading requests...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {requests.length === 0 ? (
        <p>No prayer requests found.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li key={req._id} className="border p-4 rounded-lg bg-white shadow">
             <p><strong>Name:</strong> {req.isAnonymous ? "Anonymous" : req.name}</p>
             <p><strong>Email:</strong> {req.email || "N/A"}</p>
             <p><strong>Message:</strong> {req.prayerRequest}</p>
             <p><strong>Public:</strong> {req.isPublic ? "Yes" : "No"}</p>
             <p><strong>Prayed Count:</strong> {req.prayerCount}</p>
             <p><strong>Date:</strong> {new Date(req.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;